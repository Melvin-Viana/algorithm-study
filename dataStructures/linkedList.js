module.exports = class LinkedList {
  constructor(val, next) {
    this.val = val || 0;
    this.next = next || null;
  }
  getArrayVals() {
    const output = []
    let pointer = this;
    while (pointer) {
      output.push(pointer.val);
      pointer = pointer.next;
    }
    return output;
  }
}