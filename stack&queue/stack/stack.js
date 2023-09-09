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
      return "Stack is Empty";
    } else {
      return this.data[this.top];
    }
  }
  print() {
    if (this.isEmpty()) return "Stack is empty";
    let arr = [];
    for (let i = 0; i <= this.top; i++) {
      arr.push(this.data[i]);
    }
    return arr.join("");
  }
}

module.exports = Stack;
