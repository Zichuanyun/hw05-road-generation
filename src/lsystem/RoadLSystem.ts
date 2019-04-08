import {vec3, vec2} from 'gl-matrix';

class RoadLSystem {

  constructor() {

  }

  compute() {
    let list: RoadLSystemList = new RoadLSystemList();
    let n0: RoadLSystemNode = new RoadLSystemNode(0);
    let n1: RoadLSystemNode = new RoadLSystemNode(1);
    let n2: RoadLSystemNode = new RoadLSystemNode(2);
    let n3: RoadLSystemNode = new RoadLSystemNode(3);
    console.log("here");

    list.append(n0);
    list.append(n1);
    list.prepend(n2);
    console.log("here");

    console.log(list.toArray());
    // 2 0 1



    list.delete(n0);
    console.log(list.toStringArray());
    // 2 1

    console.log("here");


    n2.detach();
    console.log(list.toStringArray());
    // 1
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

  delete(node: RoadLSystemNode) {
    if (!this.set.has(node)) {
      return;
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
      console.log(cur);
    }
    return arr;
  }

  length(): number {
    return this.set.size;
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

export default RoadLSystem;
