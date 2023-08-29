const { createLinkedList, printLinkedList } = require("./common.js");
const itemStr = require("./sublist.js");
const input = "3\n1 7 3";
const lines = input.split("\n").filter((l) => l !== "");
let [N, list] = lines;
N = 9976;
list = itemStr;
const head = createLinkedList(
  list.split(" ").map((item) => parseInt(item)),
  N
);
printLinkedList(head);

const isSorted = (head) => {
  let curr = head;
  while (curr.next) {
    if (curr.val > curr.next.val) {
      return false;
    }
    curr = curr.next;
  }
  return true;
};
const result = isSorted(head);
console.log(result);
