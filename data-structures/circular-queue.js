
module.exports = class CircularQueue {
  constructor () {
    this._cq = ['', '', '', '', '']
    this._reader = 0
    this._writer = 0
  }

  printCollection () {
    return this._cq
  }

  _updatePointer (id) {
    if (++this[id] === this._cq.length) {
      this[id] = 0
    }
  }

  enqueue (item) {
    if (Array.isArray(item)) {
      for (const x of item) {
        this.enqueue(x)
      }

      return
    }

    this._cq[this._writer] = item

    this._updatePointer('_writer')
  }

  dequeue () {
    const item = this._cq[this._reader]
    this._cq[this._reader] = ''

    this._updatePointer('_reader')
    return item
  }

  front () {
    return this._cq[this._reader]
  }
}
