const sublistReverse = (head, left, right) => {
  let cur = head;
  let prev = null;
  let i = 1;
  while (i < left) {
    prev = cur;
    cur = cur.next;
    i++;
  }
  let start = cur;
  while (i <= right) {
    const next = cur.next;
    cur.next = prev;
    prev = cur;
    cur = next;
    i++;
  }
  start.next = cur;
  return head;
};
