import {vec3, vec2, mat4, vec4, mat3, quat} from 'gl-matrix';
import SystemInfoObject from '../SystemInfoObject';
import TerrainInfo from '../TerrainInfo';
import { timingSafeEqual } from 'crypto';


//  -----> x
// |
// |
// |
// v
// z



class RoadLSystem {
  si: SystemInfoObject;
  terrainInfo: TerrainInfo;
  intxnSet: Set<RoadIntersection> = new Set();
  roadSet: Set<RoadLSystemNode> = new Set();
  roadPosArray: Array<number> = new Array();
  roadRotArray: Array<number> = new Array();
  roadLenArray: Array<number> = new Array();
  roadWidthArray: Array<number> = new Array();

  intxnPosArray: Array<number> = new Array();
  intxnRotArray: Array<number> = new Array();
  intxnLenArray: Array<number> = new Array();
  intxnWidthArray: Array<number> = new Array();

  intxnGrid: Array<Array<Array<RoadIntersection>>> = new Array();
  gridDim: number = 15;

  levitation: number = 5;

  static GlobalZForward: vec3 = vec3.fromValues(0, 0, 1);

  // Need export -------------------------------------------------
  maxZLen: number = 6;
  maxXLen: number = 3;
  scale: number = 100;
  iter: number = 20;
  heightThreshold: number = 0.65;
  angleTolerant: number = 10.0;
  mergeToIntxnThreshold: number = 2.9;
  mergeFrontierStep: number = this.mergeToIntxnThreshold * 1.1;

  roadWidth: number = 0.5;

  // highway
  highwayWidth: number = 1.5;
  highwayLen: number = 13;
  highwaySearchRadius: number = 10;
  highwaySearchAngleRange: number = 60;
  popSearchSpacialSampleRage: number = 5;
  popSearchAngularSampleRage: number = 5;
  highwayBranchPopThreshold: number = 0.8; // if higher than this, highway branch

  // end need export -------------------------------------------------
  constructor(si: SystemInfoObject, ti: TerrainInfo) {
    this.si = si;
    this.terrainInfo = ti;
  }

  setSystemInfo(si: SystemInfoObject) {
    this.si = si;
  }

  setTerrainInfo(ti: TerrainInfo) {
    this.terrainInfo = ti;
  }
  
  compute() {
    // zero out all members
    this.intxnSet.clear();
    this.roadSet.clear();

    this.roadPosArray.length = 0;
    this.roadRotArray.length = 0;
    this.roadLenArray.length = 0;
    this.roadWidthArray.length = 0;

    this.intxnPosArray.length = 0;
    this.intxnRotArray.length = 0;
    this.intxnLenArray.length = 0;
    this.intxnWidthArray.length = 0;

    this.intxnGrid.length = 0;

    // x for first [], z for second []
    for (var i = 0; i < this.gridDim; ++i) {
      let thisArray: Array<Array<RoadIntersection>> = new Array();
      for (var j = 0; j < this.gridDim; ++j) {
        thisArray.push(new Array());
      }
      this.intxnGrid.push(thisArray);
    }

    let list: RoadLSystemList = new RoadLSystemList();

    // init the first node and intxn
    let startP: vec2 = this.terrainInfo.getRandomValidKernalPos();
    startP[0] = (startP[0] - 0.5) * this.scale;
    startP[1] = (startP[1] - 0.5) * this.scale;
    
    // start node is a high way
    let startNode: RoadLSystemNode = new RoadLSystemNode();
    startNode.isHeightWay = true;
    startNode.srcPos = vec3.fromValues(startP[0], this.levitation, startP[1]);
    startNode.intendLen = this.highwayLen;

    // choose dir according to population
    let mostPopDir = this.highwaySearchMostPopulationDir(startP,
      this.highwaySearchRadius, 360,
      startNode.intendAngle);
    startNode.setDstPos(vec3.fromValues(mostPopDir[0]*startNode.intendLen + startP[0],
                                        this.levitation,
                                        mostPopDir[1]*startNode.intendLen + startP[1]));


                                        
    // make sop
    // console.log("calc mostPopDir: " + mostPopDir);
    // console.log("calc src pos: " + startNode.srcPos);
    // console.log("calc dst pos: " + startNode.dstPos);
    startNode.calcAngle(startNode.dstPos);
    // console.log("calc start angle: " + startNode.intendAngle);

    // put into grid
    let startIntxn: RoadIntersection
      = RoadIntersection.createAndPutToCell(startNode.srcPos, this);
    startIntxn.addOutRoad(startNode);
    this.intxnSet.add(startIntxn);

    list.append(startNode);

    // let testNode_0: RoadLSystemNode = RoadLSystemNode.create(
    //   list.length(), // id
    //   0, // del
    //   startIntxn.pos, // srcPos
    //   0, // prev angle
    //   0, // prev angle
    //   0 // angleOptionOffset
    // );

    // if (testNode_0.angleOption == 0 || testNode_0.angleOption == 2) {
    //   testNode_0.intendLen = this.maxZLen;
    // } else {
    //   testNode_0.intendLen = this.maxXLen;
    // }
    // testNode_0.calcDst();

    // let pos2: vec3 = vec3.fromValues(5, 0, 5);
    // vec3.add(pos2, pos2, startIntxn.pos);

    // let testNode_1: RoadLSystemNode = RoadLSystemNode.create(
    //   list.length(), // id
    //   0, // del
    //   pos2, // srcPos
    //   0, // prev angle
    //   0, // prev angle
    //   0 // angleOptionOffset
    // );

    // if (testNode_1.angleOption == 0 || testNode_1.angleOption == 2) {
    //   testNode_0.intendLen = this.maxZLen;
    // } else {
    //   testNode_0.intendLen = this.maxXLen;
    // }
    // testNode_1.calcDst();

    // list.append(testNode_1);
    // list.append(testNode_0);





    // production & drawing
    for (var i = 0; i < this.iter; ++i) {
      let curNode: RoadLSystemNode = list.head;
      // console.log("iter: " + i);
      while (curNode !== null) {
        let detachFlag: Boolean = true;
        if (curNode.del > 0) {
          curNode.del -= 1;
        } else {
          // do real stuff
          let ti = this.terrainInfo.getHeightAndDisScaleShift(
            curNode.dstPos[0], curNode.dstPos[2], this.scale);
          // console.log("ti: " + ti);
          if (curNode.isHeightWay) {
            // highway and normal node are different
            this.roadSet.add(curNode);  

            // only continue if in bound, if not in bound, leave it there
            if (ti[0] >= 0) {
              if (ti[0] > TerrainInfo.heightThreshold) {
                // if not sea
                // create self extend
                let mostPopDir = this.highwaySearchMostPopulationDir(
                  vec2.fromValues(curNode.dstPos[0], curNode.dstPos[2]),
                  this.highwaySearchRadius,
                  this.highwaySearchAngleRange,
                  curNode.intendAngle);

                let dst: vec3 = vec3.fromValues(
                  mostPopDir[0] * this.highwayLen + curNode.dstPos[0],
                  this.levitation,
                  mostPopDir[1] * this.highwayLen + curNode.dstPos[2],
                );
                let highwayNode = RoadLSystemNode.createHighway(
                  0, // ID
                  0, // del
                  curNode.dstPos, // src
                  dst // dst
                );
                list.insertBefore(curNode, highwayNode);

                let curIntxn: RoadIntersection
                = RoadIntersection.createAndPutToCell(curNode.dstPos, this);

                // TODO(zichuanyu) adjust to threshold
                if (1 - ti[1] > this.highwayBranchPopThreshold) {
                  // exceed pop threshold, generate 2 highway
                  // VERF
                  let perpendicularDir_0: vec2 = vec2.create();
                  vec2.rotate(perpendicularDir_0, mostPopDir, vec2.fromValues(0, 0), Math.PI / 2.0);
                  let branchDst_0: vec3 = vec3.fromValues(
                    perpendicularDir_0[0] * this.highwayLen + curNode.dstPos[0],
                    this.levitation,
                    perpendicularDir_0[1] * this.highwayLen + curNode.dstPos[2],
                  );
                  let highwayBranch_0 = RoadLSystemNode.createHighway(
                    0, // ID
                    0, // del
                    curNode.dstPos, // src
                    branchDst_0 // dst
                  );

                  let perpendicularDir_1: vec2 = vec2.create();
                  vec2.rotate(perpendicularDir_1, mostPopDir, vec2.fromValues(0, 0), -Math.PI / 2.0);
                  let branchDst_1: vec3 = vec3.fromValues(
                    perpendicularDir_1[0] * this.highwayLen + curNode.dstPos[0],
                    this.levitation,
                    perpendicularDir_1[1] * this.highwayLen + curNode.dstPos[2],
                  );
                  let highwayBranch_1 = RoadLSystemNode.createHighway(
                    0, // ID
                    0, // del
                    curNode.dstPos, // src
                    branchDst_1 // dst
                  );
                  
                  curIntxn.addOutRoad(highwayBranch_0);
                  curIntxn.addOutRoad(highwayBranch_1);
                  list.insertBefore(curNode, highwayBranch_0);
                  list.insertBefore(curNode, highwayBranch_1);
                } else {
                  // if not exceed pop threshold, generate one normal raod
                  let branch_0: RoadLSystemNode = RoadLSystemNode.create(
                    list.length(), // id
                    i * 5, // del
                    curNode.dstPos, // srcPos
                    curNode.intendAngle, // prev angle
                    curNode.angleOption, // prev angle
                    1 // angleOptionOffset
                  );
                  if (branch_0.angleOption == 0 || branch_0.angleOption == 2) {
                    branch_0.intendLen = this.maxXLen;
                  } else {
                    branch_0.intendLen = this.maxZLen;
                  }
                  branch_0.calcDst();
                  list.insertBefore(curNode, branch_0);
                  curIntxn.addOutRoad(branch_0)
                }
                 

                curIntxn.addInRoad(curNode);
                curIntxn.addOutRoad(highwayNode);


                this.intxnSet.add(curIntxn);

              } else {
                curNode.intendLen += this.highwayLen;
                curNode.calcDst();
                detachFlag = false;
              }
            }
          } else {
            // if this place can have a road
            // use x-z as x-y
            if (ti[0] > TerrainInfo.heightThreshold) {
              // consider the intxn grid
              let potentialIntxn: RoadIntersection = null;

              // step froward the merge threshold
              let frontierDis: number = 0;
              let frontierDir: vec3 = vec3.create();
              vec3.sub(frontierDir, curNode.dstPos, curNode.srcPos);
              vec3.normalize(frontierDir, frontierDir);
              while (true) {
                let breakFlag: boolean = false;
                frontierDis += this.mergeFrontierStep;
                if (frontierDis > curNode.intendLen) {
                  frontierDis = curNode.intendLen;
                  breakFlag = true;
                }
                let frontierPos: vec3 = vec3.create();
                vec3.scaleAndAdd(frontierPos, curNode.srcPos,
                  frontierDir, frontierDis);
                  potentialIntxn = this.findNearestIntxn(curNode.dstPos);
                if (potentialIntxn != null || breakFlag) {
                  break;
                }
              }
              
              let disToIntxn: number = this.scale; // max at first
              let goOnFlag: boolean = true;
              if (potentialIntxn != null) {
                disToIntxn = vec3.distance(curNode.dstPos, potentialIntxn.pos);
                // console.log("min dis: " + disToIntxn);
              }
  
              if (potentialIntxn != null && disToIntxn < this.mergeToIntxnThreshold) {
                // adjust dir and len if a intxn if found
                curNode.setDstPos(potentialIntxn.pos);
                curNode.intendLen = vec3.distance(curNode.srcPos, curNode.dstPos);
                curNode.calcAngle(curNode.dstPos);
                potentialIntxn.addInRoad(curNode);
                goOnFlag = false;
              } else {
                // console.log("need new intxn");
                potentialIntxn = RoadIntersection.createAndPutToCell(curNode.dstPos, this);
                this.intxnSet.add(potentialIntxn);
                potentialIntxn.addInRoad(curNode);
              }
  
              // only add node to global set when node is legal
              this.roadSet.add(curNode);   
  
              if (goOnFlag) { 
                // may need to delete road from inside the node
                // this node continues to go forward
                let subNode: RoadLSystemNode = RoadLSystemNode.create(
                  list.length(), // id
                  0, // del
                  curNode.dstPos, // srcPos
                  curNode.baseAngle, // prev angle
                  curNode.angleOption, // prev angle
                  0 // angleOptionOffset
                );
                if (subNode.angleOption == 0 || subNode.angleOption == 2) {
                  subNode.intendLen = this.maxZLen;
                } else {
                  subNode.intendLen = this.maxXLen;
                }
                subNode.calcDst();
                potentialIntxn.addOutRoad(subNode);
                list.insertBefore(curNode, subNode);
  
                // new node 0
                let branch_0: RoadLSystemNode = RoadLSystemNode.create(
                  list.length(), // id
                  0, // del
                  curNode.dstPos, // srcPos
                  curNode.baseAngle, // prev angle
                  curNode.angleOption, // prev angle
                  1 // angleOptionOffset
                );
                if (branch_0.angleOption == 0 || branch_0.angleOption == 2) {
                  branch_0.intendLen = this.maxZLen;
                } else {
                  branch_0.intendLen = this.maxXLen;
                }
                branch_0.calcDst();
                potentialIntxn.addOutRoad(branch_0);
                list.insertBefore(curNode, branch_0); 
  
                // new node 1
                let branch_1: RoadLSystemNode = RoadLSystemNode.create(
                  list.length(), // id
                  0, // del
                  curNode.dstPos, // srcPos
                  curNode.baseAngle, // prev angle
                  curNode.angleOption, // prev angle
                  -1 // angleOptionOffset
                );
                if (branch_1.angleOption == 0 || branch_1.angleOption == 2) {
                  branch_1.intendLen = this.maxZLen;
                } else {
                  branch_1.intendLen = this.maxXLen;
                }
                branch_1.calcDst();
                potentialIntxn.addOutRoad(branch_1);
                list.insertBefore(curNode, branch_1); 
  
              }
            }
          }
          // node has del==0, so no mater what, detach
          let preNode: RoadLSystemNode = curNode;
          curNode = curNode.next;
          if (detachFlag) {
            preNode.detach();
          }
        }
      }
    }
    
    console.log(this.roadSet);
    console.log(this.intxnSet);
    console.log(this.intxnGrid);

    // write all data to buffer
    this.roadSet.forEach(fillRoadArrayCallback.bind(this));
    this.intxnSet.forEach(fillIntxnArrayCallback.bind(this));
  }

  highwaySearchMostPopulationDir(src: vec2, radius: number,
    angleRange: number, baseAngle: number): vec2 {
    // always keep the intend dir

    // need export -------
    let spRate: number = this.popSearchSpacialSampleRage;
    let angleRate: number = this.popSearchAngularSampleRage; // may not be correct
    // need export -------

    // const
    let forwardStep: number = radius / Math.max(1, spRate);
    let angleStep: number = angleRange / Math.max(1, angleRate);
    // per angle
    let frontiers: Array<vec2> = new Array();
    let forwardDirs: Array<vec2> = new Array();
    let sumPop: Array<number> = new Array();

    // console.log("--------------");
    for (var i =  Math.floor(angleRate / 2); i >= (-(angleRate / 2) | 0); --i) {
      let angle: number = (baseAngle + angleStep * i) * Math.PI / 180.0;
      // console.log(angle);
      forwardDirs.push(vec2.fromValues(Math.sin(angle) * forwardStep, Math.cos(angle) * forwardStep));
      frontiers.push(vec2.clone(src));
      sumPop.push(0);
    }
    // console.log("--------------");

    for (var i = 0; i < spRate; ++i) {
      // per step
      for (var j = 0; j < angleRate; ++j) {
        // per angle
        vec2.add(frontiers[j], frontiers[j], forwardDirs[j]);
        let pop: number = 1 - this.terrainInfo.getKernelDisSacle(frontiers[j][0], frontiers[j][1], this.scale);
        if (pop > 1) {
          // means this is out of range, happens at edges
          pop = 0;
        }
        sumPop[j] += pop;
      }
    }

    let choose: vec2 = vec2.fromValues(Math.sin(baseAngle), Math.cos(baseAngle));
    let maxPop = 0.000001;
    for (var i = 0; i < sumPop.length; ++i) {
      if (sumPop[i] > maxPop) {
        maxPop = sumPop[i];
        choose = forwardDirs[i];
      }
    }

    vec2.normalize(choose, choose);
    return choose;
  }

  putInGrid(intxn: RoadIntersection, x: number, y: number) {
    x = Math.floor((x / this.scale + 0.5) * this.gridDim);
    y = Math.floor((y / this.scale + 0.5) * this.gridDim);
    this.intxnGrid[x][y].push(intxn);
  }

  findNearestIntxn(dstPos: vec3): RoadIntersection {
    let x: number = Math.floor((dstPos[0] / this.scale + 0.5) * this.gridDim);
    let y: number = Math.floor((dstPos[2] / this.scale + 0.5) * this.gridDim);
    let intxn: RoadIntersection = null;
    let minLen: number = this.scale;
    for (var m = -1; m <= 1; ++m) {
      for (var n = -1; n <= 1; ++n) {
        var xm = x + m;
        var ym = y + n;
        if (xm < 0 || xm >= this.gridDim || ym < 0 || ym >= this.gridDim) {
          continue;
        }
        let arrInCell: Array<RoadIntersection> = this.intxnGrid[xm][ym];
        for (var i = 0; i < arrInCell.length; ++i) {
          let curIntxn: RoadIntersection = arrInCell[i];
          let curLen: number = vec3.distance(curIntxn.pos, dstPos);
          if (curLen < minLen) {
            minLen = curLen;
            intxn = curIntxn;
          }
        }
      }
    }
    
    
    return intxn;
  }
}

function fillRoadArrayCallback(node: RoadLSystemNode) {
  this.roadPosArray.push(node.srcPos[0]);
  this.roadPosArray.push(node.srcPos[1]);
  this.roadPosArray.push(node.srcPos[2]);

  let q = quat.create();
  quat.fromEuler(q, 0, node.intendAngle, 0);
  // mat4.getRotation(q, transMat);
  quat.normalize(q, q);

  this.roadRotArray.push(q[0]);
  this.roadRotArray.push(q[1]);
  this.roadRotArray.push(q[2]);
  this.roadRotArray.push(q[3]);

  this.roadLenArray.push(node.intendLen);

  let width: number = this.roadWidth;
  if (node.isHeightWay) {
    width = this.highwayWidth;
  }
  this.roadWidthArray.push(width);

  // console.log("base angle: " + node.baseAngle);
}

function fillIntxnArrayCallback(intxn: RoadIntersection) {
  this.intxnPosArray.push(intxn.pos[0]);
  this.intxnPosArray.push(intxn.pos[1]);
  this.intxnPosArray.push(intxn.pos[2]);

  let q = quat.create();
  quat.fromEuler(q, -90, 0, 0);
  quat.normalize(q, q);
  this.intxnRotArray.push(q[0]);
  this.intxnRotArray.push(q[1]);
  this.intxnRotArray.push(q[2]);
  this.intxnRotArray.push(q[3]);

  this.intxnLenArray.push(1.0);
  this.intxnWidthArray.push(1.0);
}

// every node has a source intersection and dst intersection
class RoadIntersection {
  pos: vec3;
  inRoads: Set<RoadLSystemNode> = new Set();
  outRoads: Set<RoadLSystemNode> = new Set();

  static createAndPutToCell(pos: vec3, system: RoadLSystem): RoadIntersection {
    let intxn: RoadIntersection = new RoadIntersection();
    intxn.pos = vec3.clone(pos);
    system.putInGrid(intxn, intxn.pos[0], intxn.pos[2]);
    return intxn;
  }

  addInRoad(node: RoadLSystemNode) {
    node.dstIntxn = this;
    this.inRoads.add(node);
  }

  addOutRoad(node: RoadLSystemNode) {
    node.srcIntxn = this;
    this.outRoads.add(node);
  }
}

// both the road segment and the LSystem node
// because we don't want a lot of copy and paste between memory
class RoadLSystemNode {
  // the standard rotation
  static angleOptions = [0, 90, 180, 270];
  
  id: number = 0;
  angleOption: number = 0;
  prevAngleOption: number = 0;
  baseAngle: number = 0;
  intendAngle: number = 0;
  // the node system
  del: number;
  srcPos: vec3 = vec3.create();
  dstPos: vec3 = vec3.create();
  
  intendLen: number = 0;

  isHeightWay: boolean = false;

  // intersection
  srcIntxn: RoadIntersection = null;
  dstIntxn: RoadIntersection = null;

  list: RoadLSystemList = null;
  next: RoadLSystemNode = null;
  prev: RoadLSystemNode = null;

  chooseAngle(offset: number) {
    let option: number = ((offset + this.prevAngleOption) % 4 + 4)%4;
    // let option: number = ((offset) % 4 + 4)%4;

    this.angleOption = option;
    this.intendAngle = this.baseAngle
    + RoadLSystemNode.angleOptions[option];
  }

  static create(id: number, del: number, src: vec3,
    baseAngle: number, prevAngleOption: number, angleOptionOffset: number): RoadLSystemNode {
    let node: RoadLSystemNode = new RoadLSystemNode();
    node.id = id;
    node.del = del;
    node.srcPos = vec3.clone(src);
    node.baseAngle = baseAngle;
    node.prevAngleOption = prevAngleOption;
    node.chooseAngle(angleOptionOffset);
    return node;
  }

  static createHighway(id: number, del: number, src: vec3, dst: vec3): RoadLSystemNode {
    let node: RoadLSystemNode = new RoadLSystemNode();
    node.id = id;
    node.del = del;
    node.srcPos = vec3.clone(src);
    // console.log("dst in crhi: " + dst);
    node.calcAngle(dst);
    node.isHeightWay = true;
    node.dstPos = vec3.clone(dst);
    node.calcLen();
    return node;
  }

  setSrcPos(src: vec3) {
    vec3.copy(this.srcPos, src);
  }

  setDstPos(dst: vec3) {
    vec3.copy(this.dstPos, dst);
  }

  // given src, angle and intednLength
  calcDst() {
    let rad: number = this.intendAngle * Math.PI / 180;
    this.dstPos = vec3.fromValues(
      this.srcPos[0] + this.intendLen * Math.sin(rad),
      this.srcPos[1],
      this.srcPos[2] + this.intendLen * Math.cos(rad));
  }

  // givern src and dst
  calcLen() {
    this.intendLen = vec3.distance(this.srcPos, this.dstPos);
  }

  // given src and dst
  // may not be right
  calcAngleAndLength() {
    let src2Dst: vec3 = vec3.create();
    vec3.sub(src2Dst, this.dstPos, this.srcPos);
    // 2 cases according to x value
    // VERY
    let angle = vec3.angle(RoadLSystem.GlobalZForward, src2Dst);
    if (src2Dst[0] > 0) {
      this.intendAngle = angle;
    } else {
      this.intendAngle = -angle;
    }
  }
  // given src and a target (may be nearer than dst)
  calcAngle(target: vec3) {
    let src2Target: vec3 = vec3.create();
    vec3.sub(src2Target, target, this.srcPos);
    // 2 cases according to x value
    // VERF
    // console.log("target: " + target);

    // console.log("src2Target: " + src2Target);
    let angle = vec3.angle(RoadLSystem.GlobalZForward, src2Target) * 180 / Math.PI;
    // console.log("angle: " + this.intendAngle);    
    if (src2Target[0] > 0) {
      this.intendAngle = angle;
    } else {
      this.intendAngle = -angle;
    }
    // console.log("this.intendAngle: " + this.intendAngle);
  }
  
  detach() {
    this.list.delete(this);
  }
  
  toString(): string {
    return this.id.toString();
  }
}


class RoadLSystemList {
  private set: Set<RoadLSystemNode> = new Set();
  head: RoadLSystemNode = null;
  tail: RoadLSystemNode = null;

  constructor() {
    this.head = null;
    this.tail = null;
  }

  insertAfter(pivot: RoadLSystemNode, node: RoadLSystemNode): boolean {
    if (!this.set.has(pivot)) {
      return false;
    }

    let nextNode: RoadLSystemNode = pivot.next;

    node.prev = pivot;
    pivot.next = node;

    node.next = nextNode;
    if (nextNode !== null) {
      nextNode.prev = node;
    }

    if (pivot === this.tail) {
      this.tail = node;
    }

    node.list = this;
    this.set.add(node);

    return true;
  }

  insertBefore(pivot: RoadLSystemNode, node: RoadLSystemNode) {
    if (!this.set.has(pivot)) {
      return false;
    }

    let prevNode: RoadLSystemNode = pivot.prev;

    node.next = pivot;
    pivot.prev = node;

    node.prev = prevNode;
    if (prevNode !== null) {
      prevNode.next = node;
    }

    if (pivot === this.head) {
      this.head = node;
    }

    node.list = this;
    this.set.add(node);

    return true;
  }

  append(node: RoadLSystemNode) {
    node.list = this;
    if (this.set.size > 0) {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    } else {
      this.head = node;
      this.tail = node;
    }

    this.set.add(node);
  }

  prepend(node: RoadLSystemNode) {
    node.list = this;
    if (this.set.size > 0) {
      this.head.prev = node;
      node.next = this.head;
      this.head = node;
    } else {
      this.head = node;
      this.tail = node;
    }
    this.set.add(node);
  }

  delete(node: RoadLSystemNode): boolean {
    if (!this.set.has(node)) {
      return false;
    }
    node.list = null;
    this.set.delete(node);
    if (node === this.head) {
      this.head = node.next;
    }
    if (node === this.tail) {
      this.tail = node.prev;
    }
    if (node.next !== null) {
      node.next.prev = node.prev;
    }
    if (node.prev !== null) {
      node.prev.next = node.next;
    }
    node.next = null;
    node.prev = null;
    return true;
  }

  toArray(): Array<RoadLSystemNode> {
    let arr: Array<RoadLSystemNode> = new Array();
    for (var cur = this.head; cur; cur = cur.next) {
      arr.push(cur);
    }
    return arr;
  }

  toStringArray(): Array<string>{
    let arr: Array<string> = new Array();
    for (var cur = this.head; cur; cur = cur.next) {
      arr.push(cur.toString());
    }
    return arr;
  }

  length(): number {
    return this.set.size;
  }
}

export default RoadLSystem;
