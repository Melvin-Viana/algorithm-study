class Stack {
  constructor(storage = []) {
    this.storage = storage;
    this.length = storage.length;
  }

  peek() {

  }

  pop() {
    this.length--;
    return this.storage.pop();
  }

  push(val) {
    this.storage.push(val)
    console.log(this.storage)
    this.length = this.length+1;
  }
}