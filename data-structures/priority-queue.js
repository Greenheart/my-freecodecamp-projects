
module.exports = class PriorityQueue {
  constructor () {
    this._pq = []
  }
  printCollection () {
    console.log(this._pq)
  }

  enqueue (item) {
    this._pq.push(item)
  }

  _findFirst () {
    return this._pq.reduce((first, item, i, arr) => {
      if (item[1] < first.prio ||
          item[1] === first.prio && i < first.index) {
        return {
          item: item,
          prio: item[1],
          index: i
        }
      }

      return first
    }, {
      item: this._pq[0],
      prio: this._pq[0][1],
      index: 0
    })
  }

  dequeue () {
    const first = this._findFirst()
    this._pq.splice(first.index, 1)
    return first.item[0]
  }

  size () {
    return this._pq.length
  }

  front () {
    return this._findFirst().item[0]
  }

  isEmpty () {
    return this._pq.length === 0
  }
}
