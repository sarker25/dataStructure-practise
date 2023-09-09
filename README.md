# dataStructure-practise
function buyTicketsTime(tickets, k) {
  const n = tickets.length;
  const queue = new Queue();

  for (let i = 0; i < n; i++) {
    queue.enqueue({ position: i, tickets: tickets[i] });
  }

  let time = 0;

  while (!queue.isEmpty()) {
    const currentPerson = queue.dequeue();

    if (currentPerson.tickets > 1) {
      currentPerson.tickets--;

      if (currentPerson.position === k && currentPerson.tickets === 0) {
        return time + 1;
      }

      queue.enqueue(currentPerson); // Send the person to the back of the queue
    }

    time++;
  }

  return time;
}