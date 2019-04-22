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

  intxnGrid: Array<Array<Array<RoadIntersection>>> = new Array();
  gridDim: number = 15;

  // Need export -------------------------------------------------
  maxZLen: number = 6;
  maxXLen: number = 3;
  scale: number = 100;
  iter: number = 50;
  heightThreshold: number = 0.65;
  angleTolerant: number = 10.0;
  initAngle: number = 45;
  mergeToIntxnThreshold = 2;

  roadWidth: number = 0.5;

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
    RoadLSystemNode.initAngle = this.initAngle;
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
    // TODO(zichuanyu) use worley cell as start point  
    let startP: vec2 = this.terrainInfo.getRandomValidKernalPos();
    startP[0] = (startP[0] - 0.5) * this.scale;
    startP[1] = (startP[1] - 0.5) * this.scale;
    
    // start node is a high way
    let startNode: RoadLSystemNode = new RoadLSystemNode();
    startNode.angleOption = 0;
    startNode.prevAngleOption = 0;
    startNode.chooseAngle(2);
    startNode.srcPos = vec3.fromValues(startP[0], 5, startP[1]);
    startNode.intendLen = this.maxZLen;
    startNode.calcDst();

    // put into grid
    let startIntxn: RoadIntersection
      = RoadIntersection.createAndPutToCell(startNode.srcPos, this);
    startIntxn.addOutRoad(startNode);
    this.intxnSet.add(startIntxn);

    list.append(startNode);

    // production & drawing
    for (var i = 0; i < this.iter; ++i) {
      let curNode: RoadLSystemNode = list.head;
      // console.log("iter: " + i);
      while (curNode !== null) {
        if (curNode.del > 0) {
          curNode.del -= 1;
        } else {
          // do real stuff
          
          if (curNode.isHeightWay) {
            // highway and normal node are different

            

            // if is sea, can still forward
            //  use same origin, but different dst
            //  when out of bound, then kill

            // if not sea, then create a normal road




          } else {
            // if this place can have a road
            // use x-z as x-y
            let ti = this.terrainInfo.getHeightAndDisScaleShift(
              curNode.dstPos[0], curNode.dstPos[2],
              100);

            if (ti[0] > TerrainInfo.heightThreshold) {
              // consider the intxn grid
              let potentialIntxn: RoadIntersection = this.findNearestIntxn(curNode.dstPos);
              let disToIntxn: number = this.scale; // max at first
              let goOnFlag: boolean = true;
              if (potentialIntxn != null) {
                disToIntxn = vec3.distance(curNode.dstPos, potentialIntxn.pos);
                // console.log("min dis: " + disToIntxn);
              }
  
              if (potentialIntxn != null && disToIntxn < this.mergeToIntxnThreshold) {
                // TODO(zichuanyun) adjust dir
                curNode.setDstPos(potentialIntxn.pos);
                curNode.intendLen = vec3.distance(curNode.srcPos, curNode.dstPos);
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
                // this node continues to go forward
                let subNode: RoadLSystemNode = RoadLSystemNode.create(
                  list.length(), // id
                  0, // del
                  curNode.dstPos, // srcPos
                  curNode.intendAngle, // prev angle
                  curNode.angleOption, // prev angle
                  0 // angleOptionOffset
                );
                if (subNode.angleOption == 0 || subNode.angleOption == 2) {
                  subNode.intendLen = this.maxZLen;
                } else {
                  subNode.intendLen = this.maxXLen;
                }
                subNode.calcDst();
                list.insertBefore(curNode, subNode);
  
                // new node 0
                let branch_0: RoadLSystemNode = RoadLSystemNode.create(
                  list.length(), // id
                  0, // del
                  curNode.dstPos, // srcPos
                  curNode.intendAngle, // prev angle
                  curNode.angleOption, // prev angle
                  1 // angleOptionOffset
                );
                if (branch_0.angleOption == 0 || branch_0.angleOption == 2) {
                  branch_0.intendLen = this.maxZLen;
                } else {
                  branch_0.intendLen = this.maxXLen;
                }
                branch_0.calcDst();
                list.insertBefore(curNode, branch_0); 
  
                // new node 1
                let branch_1: RoadLSystemNode = RoadLSystemNode.create(
                  list.length(), // id
                  0, // del
                  curNode.dstPos, // srcPos
                  curNode.intendAngle, // prev angle
                  curNode.angleOption, // prev angle
                  -1 // angleOptionOffset
                );
                if (branch_1.angleOption == 0 || branch_1.angleOption == 2) {
                  branch_1.intendLen = this.maxZLen;
                } else {
                  branch_1.intendLen = this.maxXLen;
                }
                branch_1.calcDst();
                list.insertBefore(curNode, branch_1); 
  
              } else {
                // TODO(zichuanyu) adjust, no more road is created (may create intxn)
                // only when adjust is successful, add to roadSet
                
              }
            }
          }
          // node has del==0, so no mater what, detach
          let preNode: RoadLSystemNode = curNode;
          curNode = curNode.next;
          preNode.detach();
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

  putInGrid(intxn: RoadIntersection, x: number, y: number) {
    x = Math.floor((x / this.scale + 0.5) * this.gridDim);
    y = Math.floor((y / this.scale + 0.5) * this.gridDim);
    this.intxnGrid[x][y].push(intxn);
  }

  findNearestIntxn(dstPos: vec3): RoadIntersection {
    let x: number = Math.floor((dstPos[0] / this.scale + 0.5) * this.gridDim);
    let y: number = Math.floor((dstPos[2] / this.scale + 0.5) * this.gridDim);
    // TOOD(zichuanyun) search 9 cells
    let intxn: RoadIntersection = null;
    let minLen: number = this.scale;
    for (var m = -1; m <= 1; ++m) {
      for (var n = -1; n <= 1; ++n) {
        var xm = x + m;
        var ym = y + n;
        if (xm < 0 || xm > this.gridDim || ym < 0 || ym > this.gridDim) {
          continue;
        }
        let arrInCell: Array<RoadIntersection> = this.intxnGrid[x][y];
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
  // HERE
  this.roadRotArray.push(q[0]);
  this.roadRotArray.push(q[1]);
  this.roadRotArray.push(q[2]);
  this.roadRotArray.push(q[3]);

  this.roadLenArray.push(node.intendLen);

  this.roadWidthArray.push(this.roadWidth);
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
  static initAngle: number = 30;
  static angleOptions = [0, 90, 180, 270];
  
  id: number = 0;
  angleOption: number = 0;
  prevAngleOption: number = 0;
  prevAngle: number = RoadLSystemNode.initAngle;
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
    this.angleOption = option;
    this.intendAngle = RoadLSystemNode.initAngle
    + RoadLSystemNode.angleOptions[option];
  }

  static create(id: number, del: number, src: vec3,
    prevAngle: number, prevAngleOption: number, angleOptionOffset: number): RoadLSystemNode {
    let node: RoadLSystemNode = new RoadLSystemNode();
    node.id = id;
    node.del = del;
    node.srcPos = vec3.clone(src);
    node.prevAngle = prevAngle;
    node.prevAngleOption = prevAngleOption;
    node.chooseAngle(angleOptionOffset);
    return node;
  }

  setSrcPos(src: vec3) {
    vec3.copy(this.srcPos, src);
  }

  setDstPos(dst: vec3) {
    vec3.copy(this.dstPos, dst);
  }

  calcDst() {
    let rad: number = this.intendAngle * Math.PI / 180;
    this.dstPos = vec3.fromValues(
      this.srcPos[0] + this.intendLen * Math.sin(rad),
      this.srcPos[1],
      this.srcPos[2] + this.intendLen * Math.cos(rad));
  }
  
  detach() {
    this.list.delete(this);
  }
  
  toString(): string {
    return this.id.toString();
  }

  rotateDegree(deg: number) {
    // TODO(zichuanyu) think more
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
