
module.exports = class Queue {
  constructor () {
    this._queue = []
  }

  print () {
    console.log(this._queue)
  }

  enqueue (item) {
    this._queue.push(item)
  }

  dequeue (item) {
    return this._queue.shift()
  }

  front () {
    return this._queue[0]
  }

  size () {
    return this._queue.length
  }

  isEmpty () {
    return this._queue === 0
  }
}
