const Node = require("./node");

class Linkedlist {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;
  }
  pop() {
    if (!this.head) {
      console.log("List is empty");
      return;
    }
    let top = this.head;
    this.head = this.head.next;
    top.next = null;
    this.size--;
    if (this.size === 0) {
      this.tail = null;
    }
    console.log(top.val);
    return top.val;
  }

  print() {
    let current = this.head;
    let value = [];
    while (current) {
      value.push(current.val);
      current = current.next;
    }
    console.log(value.join(" "));
  }
}
const list = new Linkedlist();
list.push(10);
list.push(20);
list.print();
list.pop();
list.print();
