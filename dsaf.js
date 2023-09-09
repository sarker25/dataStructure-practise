class Queue {
  constructor() {
    this.queue = [];
  }

  enqueue(item) {
    this.queue.push(item);
  }

  dequeue() {
    return this.queue.shift();
  }

  isEmpty() {
    return this.queue.length === 0;
  }

  size() {
    return this.queue.length;
  }
}

function buyTicketsTime(tickets, k) {
  const n = tickets.length;
  const queue = new Queue();

  for (let i = 0; i < n; i++) {
    queue.enqueue({ position: i, tickets: tickets[i] });
  }

  let time = 0;

  while (!queue.isEmpty()) {
    const currentPerson = queue.dequeue();

    if (currentPerson.tickets > 0) {
      currentPerson.tickets--;

      if (currentPerson.position === k && currentPerson.tickets === 0) {
        return time + 1;
      }
      queue.enqueue(currentPerson);
    }
    time++;
  }

  return time;
}

// Example usage:
const tickets1 = [2, 3, 2];
const k1 = 2;
console.log(buyTicketsTime(tickets1, k1)); // Output: 6

const tickets2 = [5, 1, 1, 1];
const k2 = 0;
console.log(buyTicketsTime(tickets2, k2)); // Output: 8
