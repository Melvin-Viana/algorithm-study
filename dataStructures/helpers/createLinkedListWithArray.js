const LinkedList = require('../linkedList');

module.exports = (arr) => {
  let output = new LinkedList();
  let pointer = output;
  for (let i = 0; i< arr.length - 1 ; i++) {
    let num = arr[i];
    [pointer.val, pointer.next] = [num, new LinkedList()];
    pointer = pointer.next;
  }
  pointer.val = arr[arr.length-1];
  console.log(pointer)

  return output;
}