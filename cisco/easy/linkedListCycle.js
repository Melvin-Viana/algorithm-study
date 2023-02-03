const hasCycle = (head) => {
  let slow = head;
  let fast = head;
  while (slow && fast.next) {
    slow = slow.next;
    if(slow === fast) return true;
    fast = fast.next.next;
  }
  return false
}