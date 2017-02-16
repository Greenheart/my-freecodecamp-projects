
module.exports = class HashTable {
  constructor () {
    this.table = {}
  }

  _naiveHash (string) {
    return string.split('')
            .reduce((sum, char) => sum + char.charCodeAt(), 0)
  }

  add (key, value) {
    const hashed = this._naiveHash(key)
    if (this.table[hashed] === undefined) {
      this.table[hashed] = {}
    }

    this.table[hashed][key] = value
  }

  remove (key) {
    delete this.table[this._naiveHash(key)][key]
  }

  lookup (key) {
    const hashed = this._naiveHash(key)
    return this.table[hashed] &&
           this.table[hashed][key]
  }
}
