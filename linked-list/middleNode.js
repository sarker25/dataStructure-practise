const { createLinkedList, printLinkedList } = require("./common.js");
const input = "5\n1 2 3 4 5";
const lines = input.split("\n").filter((l) => l !== "");
const [N, list] = lines;

const head = createLinkedList(list.split(" "), N);
printLinkedList(head);

const middleNode = (head) => {
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next;
    if (fast) {
      fast = fast.next;
    }
  }
  console.log(slow.val);
};
middleNode(head);
