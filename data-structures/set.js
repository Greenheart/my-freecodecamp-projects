
module.exports = class Set {
  constructor (items = []) {
    this._set = []

    for (const x of items) {
      this.add(x)
    }
  }

  has (x) {
    return this._set.includes(x)
  }

  values () {
    // As JS objects are passed by reference, returning our internal store
    // would allow external code to mutate our private state.
    // Because of this, we need to return a copy.
    return this._set.slice()
  }

  add (x) {
    if (this.has(x)) return false

    this._set.push(x)
    return true
  }

  remove (x) {
    if (!this.has(x)) return false

    this._set.splice(this._set.indexOf(x), 1)
    return true
  }

  size () {
    return this._set.length
  }

  union (other) {
    return new Set(
      this._set.concat(other.values())
    )
  }

  intersection (other) {
    const values = other.values()
    const common = this._set.filter(x => values.includes(x))
                    .concat(values.filter(x => this._set.includes(x)))
    return new Set(common)
  }

  difference (other) {
    const values = other.values()
    const diff = this._set.filter(x => !values.includes(x))
                  .concat(values.filter(x => !this._set.includes(x)))

    return new Set(diff)
  }

  subset (other) {
    return other.values()
            .every(x => this._set.includes(x))
  }
}
