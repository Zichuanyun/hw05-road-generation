import {vec3, vec2, mat4, vec4, mat3, quat} from 'gl-matrix';
import SystemInfoObject from '../SystemInfoObject';
import TerrainInfo from '../TerrainInfo';

class RoadLSystem {
  si: SystemInfoObject;
  ti: TerrainInfo;
  intxnSet: Set<RoadIntersection> = new Set();
  roadSet: Set<RoadLSystemNode> = new Set();
  posArray: Array<number> = new Array();
  rotArray: Array<number> = new Array();
  lenArray: Array<number> = new Array();
  // Need export -------------------------------------------------

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

    let list: RoadLSystemList = new RoadLSystemList();
    // TODO(zichuanyu) use worley cell as start point
    
    this.roadSet.add(new RoadLSystemNode(0,
      0,
      vec3.fromValues(-2, 10, -3),
      20));

    this.roadSet.add(new RoadLSystemNode(0,
        90,
        vec3.fromValues(1, 10, -3),
        20));
    this.roadSet.forEach(fillArrayCallback.bind(this));
  }

  

}

function fillArrayCallback(node: RoadLSystemNode) {
  console.log(node);
  this.posArray.push(node.srcPos[0]);
  this.posArray.push(node.srcPos[1]);
  this.posArray.push(node.srcPos[2]);

  // let rad: number = node.intendRot * Math.PI / 180.0;
  // // let rad: number = Math.atan2(node.intendDir[0], node.intendDir[2]);
  // console.log("deg: " + rad * 180.0 / Math.PI);
  // let transMat: mat4 = mat4.fromValues(
  //   Math.cos(rad), Math.sin(rad), 0, 0,   // 1st col
  //   -Math.sin(rad), Math.cos(rad), 0, 0,  // 2nd col
  //   0, 0, 1, 0,                           // 3rd col
  //   0, 0, 0, 1                            // 4th col
  // );
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

  constructor(id: number, prevRot: number, srcPos: vec3, intendLen: number) {
    this.id = id;
    this.prevRot = prevRot;
    this.intendRot = prevRot;
    vec3.copy(this.srcPos, srcPos);
    this.intendLen = intendLen;
  }

  list: RoadLSystemList = null;
  next: RoadLSystemNode = null;
  prev: RoadLSystemNode = null;

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
