class Node {
  constructor (element) {
    this.element = element
    this.next = null
  }
}

class LinkedList {
  constructor () {
    this._length = 0
    this._head = null
  }

  head () {
    return this._head
  }

  size () {
    return this._length
  }

  add (element) {
    const node = new Node(element)

    if (this._head === null) {
      this._head = node
    } else {
      let current = this._head

      while (current.next !== null) {
        current = current.next
      }

      current.next = node
    }

    ++this._length
  }

  remove (element) {
    if (this._head === null) return

    let previous
    let current = this._head

    while (current.next !== null && current.element !== element) {
      previous = current
      current = current.next
    }

    if (previous) {
      previous.next = current.next
    } else {
      this._head = current.next
    }

    --this._length
  }

  isEmpty () {
    return this._head === null
  }

  indexOf (element) {
    if (this._head === null) return -1

    let i = 0
    let current = this._head

    while (current.element !== element && current.next !== null) {
      current = current.next
      ++i
    }

    if (current.element === element) {
      return i
    }

    return -1
  }

  elementAt (index) {
    if (this._head === null) return null

    let i = 0
    let current = this._head

    while (i < index && current.next !== null) {
      current = current.next
      ++i
    }

    if (i === index) {
      return current.element
    }

    return null
  }

  addAt (index, element) {
    if (this._head === null) return null
    else if (index < 0 || index >= this._length) return false

    let i = 0
    let previous
    let current = this._head

    while (i < index && current.next !== null) {
      previous = current
      current = current.next
      ++i
    }

    if (i === index) {
      const node = new Node(element)
      if (previous) {
        previous.next = node
        node.next = current
      } else {
        this._head = node
      }

      ++this._length
    }

    return false
  }

  removeAt (index) {
    if (this._head === null) return null
    else if (index < 0 || index >= this._length) return null

    let i = 0
    let previous
    let current = this._head

    while (i < index && current.next !== null) {
      previous = current
      current = current.next
      ++i
    }

    if (i === index) {
      if (previous) {
        previous.next = current.next
      } else {
        this._head = current.next
      }

      --this._length
      return current.element
    }
  }
}
