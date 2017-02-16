
module.exports =
class Map {
  constructor () {
    this._map = {}
  }

  set (key, value) {
    this._map[key] = value
  }

  remove (key) {
    delete this._map[key]
  }

  get (key) {
    return this._map[key]
  }

  has (key) {
    return this._map[key] !== undefined
  }

  size () {
    return Object.keys(this._map).length
  }

  values () {
    return Object.values(this._map)
  }

  clear () {
    this._map = {}
  }

  entries () {
    return Object.entries(this._map)
  }
}
