import {vec3, vec2} from 'gl-matrix';
import SystemInfoObject from '../SystemInfoObject';
import TerrainInfo from '../TerrainInfo';

class RoadLSystem {
  si: SystemInfoObject;
  ti: TerrainInfo;

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
    this.test();
  }

  test() {
    let list: RoadLSystemList = new RoadLSystemList();
    let n0: RoadLSystemNode = new RoadLSystemNode(0);
    let n1: RoadLSystemNode = new RoadLSystemNode(1);
    let n2: RoadLSystemNode = new RoadLSystemNode(2);
    let n3: RoadLSystemNode = new RoadLSystemNode(3);

    list.append(n0);
    list.append(n1);
    list.prepend(n2);
    console.log(list.toStringArray());
    // 2 0 1

    list.delete(n0);
    console.log(list.toStringArray());
    // 2 1

    n2.detach();
    console.log(list.toStringArray());
    // 1

    list.insertAfter(n1, n3);
    console.log(list.toStringArray());
    // 1 3

    list.insertBefore(n1, n2);
    console.log(n2.list.toStringArray());
    // 2 1 3

    console.log(list.head.toString());
    // 2

    console.log(list.tail.toString());
    // 3

    // console.log(n0.list.toStringArray());
    // null

    console.log(list.insertAfter(n0, n0));
    // false

    console.log(list.insertBefore(n1, n0));
    // true

    console.log(list.toStringArray());
    // 2 0 1 3

    list.delete(list.head);
    list.delete(n3);
    console.log(list.head.toString());
    // 0
    console.log(list.tail.toString());
    // 1
    console.log(list.toStringArray());
    // 0 1
  }
}

class RoadLSystemNode {
  num: number;

  constructor(num: number) {
    this.num = num;
  }

  list: RoadLSystemList = null;
  next: RoadLSystemNode = null;
  prev: RoadLSystemNode = null;

  detach() {
    this.list.delete(this);
  }
  
  toString(): string {
    return this.num.toString();
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
    console.log("here 1");
    node.list = this;
    if (this.set.size > 0) {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    } else {
    console.log("here 2");
      this.head = node;
      this.tail = node;
    }
    console.log("here 3");

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
