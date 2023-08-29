/**
 *
 * @param {any} val
 * @returns {ListNode}
 */
const createNode = (val) => {
  return {
    val,
    next: null,
  };
};

const createLinkedList = (arr) => {
  let head = createNode(arr[0]);
  let cur = head;
  for (let i = 1; i < arr.length; i++) {
    cur.next = createNode(arr[i]);
    cur = cur.next;
  }
  return head;
};

const printLinkedList = (head) => {
  let cur = head;
  const arr = [];
  while (cur) {
    arr.push(cur.val);
    cur = cur.next;
  }
};

module.exports = {
  createNode,
  createLinkedList,
  printLinkedList,
};
