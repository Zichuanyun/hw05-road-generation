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
  ti: TerrainInfo;
  intxnSet: Set<RoadIntersection> = new Set();
  roadSet: Set<RoadLSystemNode> = new Set();
  posArray: Array<number> = new Array();
  rotArray: Array<number> = new Array();
  lenArray: Array<number> = new Array();
  intxnGrid: Array<Array<Array<RoadIntersection>>> = new Array();
  gridDim: number = 15;

  // Need export -------------------------------------------------
  maxZLen: number = 6;
  maxXLen: number = 3;
  scale: number = 100;
  iter: number = 6;
  heightThreshold: number = 0.65;
  angleTolerant: number = 10.0;
  initAngle: number = 30;

  // end need export -------------------------------------------------

  constructor(si: SystemInfoObject, ti: TerrainInfo) {
    this.si = si;
    this.ti = ti;
  }

  setSystemInfo(si: SystemInfoObject) {
    this.si = si;
  }

  setTerrainInfo(ti: TerrainInfo) {
    this.ti = ti;
  }
  
  compute() {
    RoadLSystemNode.initAngle = this.initAngle;
    // zero out all members
    this.intxnSet.clear();
    this.roadSet.clear();
    this.posArray.length = 0;
    this.rotArray.length = 0;
    this.lenArray.length = 0;
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
    let startNode: RoadLSystemNode = new RoadLSystemNode();

    // startNode.prevAngle = 0;
    startNode.angleOption = 0;
    startNode.prevAngleOption = 0;
    startNode.chooseAngle(0);

    startNode.srcPos = vec3.fromValues(-45, 5, 0);
    startNode.intendLen = this.maxZLen;
    startNode.calcDst();
    let startIntxn: RoadIntersection = new RoadIntersection(startNode.srcPos);
    
    startIntxn.addOutRoad(startNode);
    this.intxnSet.add(startIntxn);

    list.append(startNode);

    // production & drawing
    for (var i = 0; i < this.iter; ++i) {
      let curNode: RoadLSystemNode = list.head;
      while (curNode !== null) {
        if (curNode.del > 0) {
          curNode.del -= 1;
        } else {
          // do real stuff
          // if this place can have a road
          // use x-z as x-y
          if (this.ti.getHeightScaleShift(curNode.dstPos[0], curNode.dstPos[2], 100) > 0.65) {
            // consider the intxn grid
            // 搜索intxn
            //  有的话，找最近的，链接、放新的路到set

            //  没有的话，放置一个新的intxn
            // let potentialIntxn: RoadIntersection = 


            if (true) {
              // if in intxn, no more new road

              break;
            }
            // only add node to global set when node is legal
            this.roadSet.add(curNode);            

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
          // no mater what, detach
          let preNode: RoadLSystemNode = curNode;
          curNode = curNode.next;
          
          preNode.detach();
        }

      }
    }
    
    console.log(this.roadSet);
    // write all data to buffer
    this.roadSet.forEach(fillArrayCallback.bind(this));
  }

  putInGrid(intxn: RoadIntersection, x: number, y: number) {
    x = Math.floor((x / this.scale + 0.5) * this.gridDim);
    y = Math.floor((y / this.scale + 0.5) * this.gridDim);
    this.intxnSet.add(intxn);
  }

  findNearestIntxn(dstPos: vec3): RoadIntersection {
    let x: number = Math.floor((dstPos[0] / this.scale + 0.5) * this.gridDim);
    let y: number = Math.floor((dstPos[2] / this.scale + 0.5) * this.gridDim);

    let intxn: RoadIntersection = null;
    let minLen: number = this.scale;
    let arrInCell: Array<RoadIntersection> = this.intxnGrid[x][y];
    for (var i = 0; i < arrInCell.length; ++i) {
      let curIntxn: RoadIntersection = arrInCell[i];
      let curLen: number = vec3.distance(curIntxn.pos, dstPos);

    }

    return intxn;

  }



}

function fillArrayCallback(node: RoadLSystemNode) {
  this.posArray.push(node.srcPos[0]);
  this.posArray.push(node.srcPos[1]);
  this.posArray.push(node.srcPos[2]);

  let q = quat.create();
  quat.fromEuler(q, 0, node.intendAngle, 0);
  // mat4.getRotation(q, transMat);
  quat.normalize(q, q);
  // HERE
  this.rotArray.push(q[0]);
  this.rotArray.push(q[1]);
  this.rotArray.push(q[2]);
  this.rotArray.push(q[3]);

  this.lenArray.push(node.intendLen);
}

// every node has a source intersection and dst intersection
class RoadIntersection {
  pos: vec3 = vec3.create();
  inRoads: Set<RoadLSystemNode> = new Set();
  outRoads: Set<RoadLSystemNode> = new Set();

  constructor(pos: vec3) {
    // TODO(zichuanyu) put into cell
    vec3.copy(this.pos, pos);
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

  calcDst() {
    let rad: number = this.intendAngle * Math.PI / 180;
    console.log("angleOption: " + this.angleOption);
    console.log("intendlen: " + this.intendLen);
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
