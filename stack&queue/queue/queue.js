class Queue {
  constructor() {
    this.data = [];
    this.front = -1;
    this.rear = -1;
  }
  isEmpty() {
    return this.front === -1;
  }
  enqueue(val) {
    if (this.isEmpty()) {
      this.front++;
    }
    this.rear++;
    this.data[this.rear] = val;
  }
  dequeue() {
    if (this.isEmpty()) {
      console.log("Queue is empty");
    }
    const val = this.data[this.front];
    if (this.front === this.rear) {
      this.front = -1;
      this.rear = -1;
    } else {
      this.front++;
    }
    return val;
  }
  print() {
    if (this.isEmpty()) return "Queue is empty";
    let arr = [];
    for (let i = this.front; i <= this.rear; i++) {
      arr.push(this.data[i]);
    }
    return arr.join("");
  }
  front() {
    if (this.isEmpty()) return "Queue is empty";
    return this.data[this.front];
  }
  rear() {
    if (this.isEmpty()) return "Queue is empty";
    return this.data[this.rear];
  }
}
