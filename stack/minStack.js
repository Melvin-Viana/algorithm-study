class MinStack {
  constructor() {
    this.storage = [];
    this.minStack = [];
  }
  push(val) {
    this.storage.push(val);
    if(!this.minStack.length) this.minStack.push(val)
    else if(this.minStack.length && this.getMin()>= val) this.minStack.push(val);
  }

  pop() {
    let curr = this.storage.pop()
    if(curr === this.getMin()) this.minStack.pop();
    if(this.storage.length && !this.minStack.length) this.minStack.push(this.top());
    return curr;
  }

  top() {
    return [this.storage[this.storage.length-1]];
  }

  getMin() {
    return this.minStack[this.minStack.length - 1];
  }
}