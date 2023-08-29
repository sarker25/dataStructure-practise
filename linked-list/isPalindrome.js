const { createLinkedList, printLinkedList } = require("./common.js");
const input = "5\n1 2 3 4 5";
const lines = input.split("\n").filter((l) => l !== "");
const [N, list] = lines;
const head = createLinkedList(
  list.split(" ").map((item) => parseInt(item)),
  N
);
printLinkedList(head);

const isPalindrome = (head) => {
  if (!head || !head.next) {
    console.log("YES");
    return;
  }

  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let prev = null;
  let current = slow;
  while (current) {
    const next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  let firstHalf = head;
  let secondHalf = prev;
  while (secondHalf) {
    if (firstHalf.val !== secondHalf.val) {
      console.log("No");
      return;
    }
    firstHalf = firstHalf.next;
    secondHalf = secondHalf.next;
  }
  console.log("YES");
  return true;
};
isPalindrome(head);
