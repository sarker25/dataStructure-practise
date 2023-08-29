const Node = require("./node");

class Linkedlist {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;
  }

  pop() {
    if (!this.head) {
      return "list is empty";
    }
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    newTail.next = null;
    this.tail = newTail;
    this.size--;
    if (this.size === 0) {
      this.head = null;
      this.tail = null;
    }
    return current.val;
  }

  shift() {
    if (!this.head) {
      return undefined;
    }
    let current = this.head;
    this.head = current.next;
    this.size--;
    if (this.size === 0) {
      this.head = null;
      this.tail = null;
    }
  }

  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return;
    }
    let currentHead = this.head;
    newNode.next = currentHead;
    this.head = newNode;
    this.size++;
  }

  get(index) {
    if (index < 0 || index > this.size) {
      console.log("wrong index!! Please check again");
    }
  }

  print() {
    let arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    console.log(arr);
  }
}
let list1 = new Linkedlist();
list1.push(10);
list1.push(20);
list1.push(30);
list1.push(40);
list1.print();
console.log("=================");
// let pop = list1.pop();
// console.log(pop);
list1.shift();
console.log("=================");
list1.print();
console.log("=================");
list1.unshift(50);
list1.print();
list1.get(5);
list1.get(-2);
