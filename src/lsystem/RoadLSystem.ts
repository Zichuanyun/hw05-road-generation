import {vec3, vec2, mat4, vec4, mat3, quat} from 'gl-matrix';
import SystemInfoObject from '../SystemInfoObject';
import TerrainInfo from '../TerrainInfo';
import { timingSafeEqual } from 'crypto';

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
  maxZLen: number = 3;
  maxXLen: number = 3;
  edgeLen: number = 100;
  iter: number = 1;
  height_threshold = 0.65;
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
    // this.test();

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
    let startNode: RoadLSystemNode = new RoadLSystemNode(0);
    startNode.prevRot = 0;
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
            // TODO(zichuanyu) consider the intxn grid
            // only add node to global set when node is legal
            this.roadSet.add(curNode);


            // continue this node
            let subNode: RoadLSystemNode = new RoadLSystemNode(list.length());
            

            list.insertBefore(curNode, subNode);


            // new node 0
            let branch_0: RoadLSystemNode = new RoadLSystemNode(list.length());
            branch_0.setSrcPos(curNode.dstPos);
            branch_0.del = 0;
            branch_0.prevRot = curNode.intendRot;
            branch_0.intendRot = branch_0.prevRot + 90;
            branch_0.intendLen = this.maxZLen;
            branch_0.calcDst();
            list.insertBefore(curNode, branch_0);

            // new node 1
            let branch_1: RoadLSystemNode = new RoadLSystemNode(list.length());
            branch_1.setSrcPos(curNode.dstPos);
            branch_1.del = 0;
            branch_1.prevRot = curNode.intendRot;
            branch_1.intendRot = branch_1.prevRot - 90;
            branch_1.intendLen = this.maxZLen;
            branch_1.calcDst();
            list.insertBefore(curNode, branch_1);

            // original node keep going
            curNode.setSrcPos(curNode.dstPos);
            curNode.calcDst();

            // HERE can not display
            // add node to global set
          } else {
            // TODO(zichuanyu) adjust, no more road is created (may create intxn)
            // only when adjust is successful, add to roadSet
            
          }
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
}

function fillArrayCallback(node: RoadLSystemNode) {
  console.log(node);
  this.posArray.push(node.srcPos[0]);
  this.posArray.push(node.srcPos[1]);
  this.posArray.push(node.srcPos[2]);

  let q = quat.create();
  quat.fromEuler(q, 0, node.intendRot, 0);
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
  static frontDir: vec4 = vec4.fromValues(0, 0, 1, 0);

  id: number;
  // the node system
  del: number;
  srcPos: vec3 = vec3.create();
  dstPos: vec3 = vec3.create();
  prevRot: number = 0;
  intendRot: number = 0;
  
  intendLen: number;

  isHeightWay: false;

  // intersection
  srcIntxn: RoadIntersection = null;
  dstIntxn: RoadIntersection = null;

  list: RoadLSystemList = null;
  next: RoadLSystemNode = null;
  prev: RoadLSystemNode = null;

  constructor(id: number) {
    this.id = id;
  }

  setSrcPos(src: vec3) {
    vec3.copy(this.srcPos, src);
  }

  calcDst() {
    this.dstPos = vec3.fromValues(
      this.srcPos[0] + this.intendLen * Math.sin(this.intendRot),
      this.srcPos[1],
      this.srcPos[2] + this.intendLen * Math.cos(this.intendRot));
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

class RoadTurtle {

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
