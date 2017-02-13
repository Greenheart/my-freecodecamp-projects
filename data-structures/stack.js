
module.exports = class Stack {
  constructor () {
    this._stack = []
  }

  print () {
    console.log(this._stack)
  }

  push (item) {
    this._stack.push(item)
  }

  pop () {
    return this._stack.pop()
  }

  peek () {
    return this._stack[this._stack.length - 1]
  }

  isEmpty () {
    return this._stack.length === 0
  }

  clear () {
    this._stack.length = 0
  }
}
