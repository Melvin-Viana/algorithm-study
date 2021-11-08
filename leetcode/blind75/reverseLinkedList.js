const reverseLinkedList = (head) => {

  /** Destructuring */
  if(!head || !head.next) return head
  let curr = head, prev = null;
  while (curr) {
    [curr.next, prev, curr] = [prev, curr, curr.next];
  }
  return prev
}

/**
 *
  No destructuring
 */
const reverseLinkedList = (head) => {
  let cur = head;
  let prev = null;
  let next = null;

  while (cur) {
      next = cur.next;
      cur.next = prev;
      prev = cur;
      cur = next;
  }

  return prev;
}