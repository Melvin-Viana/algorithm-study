const linkedListCycle = (head) =>{
  const visited = {};
  let curr = head;

  while (curr) {
    if(curr.visited) return true;
    curr.visited = true;
    curr = curr.next;
      }
      return false;

      let slow = fast = head;
      while (fast && fast.next && slow === fast) [slow, fast] = [slow.next, fast.next.next]
      return slow === fast;
}