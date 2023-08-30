class Stack {
  #data;
  #top;
  constructor() {
    this.data = [];
    this.top = -1;
  }

  push(val) {
    this.top++;
    this.data[this.top] = val;
  }
  pop() {
    if (this.top === -1) {
      console.log("Stack is empty");
    }
    const val = this.data[this.top];
    this.top--;
    return val;
  }
  isEmpty() {
    return this.top === -1;
  }
  peek() {
    if (this.isEmpty()) {
      console.log("Stack is Empty");
    } else {
      console.log(this.data[this.top]);
    }
  }
  print() {
    if (this.isEmpty()) return console.log("Stack is empty");
    for (let i = 0; i <= this.top; i++) {
      console.log(this.data[i]);
    }
  }
}
const stack1 = new Stack();

module.exports = stack1;
