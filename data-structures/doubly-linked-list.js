class Node {
  constructor (data, prev = null) {
    this.data = data
    this.prev = prev
    this.next = null
  }
}

module.exports = class DoublyLinkedList {
  constructor () {
    this.head = null
    this.tail = null
    this._length = 0
  }

  // Append element.
  add (element) {
    if (this.head === null) {
      const node = new Node(element)
      this.head = node
      this.tail = node
    } else {
      const node = new Node(element, this.tail)
      this.tail.next = node
      this.tail = node
    }

    ++this._length
  }

  // Remove all occurrences of element.
  remove (element) {
    if (this.head === null) return null

    let current = this.head
    const removed = []

    while (current !== null) {
      if (current.data === element) {
        removed.push(current.data)
        --this.length

        if (current.prev === null) {
          this.head = current.next
        } else {
          current.prev.next = current.next
        }

        if (current.next === null) {
          this.tail = current.prev
        } else {
          current.next.prev = current.prev
        }
      }

      current = current.next
    }

    return removed
  }

  // Reverse the list in-place.
  reverse () {
    if (this.head === null || this._length < 2) {
      return null
    }

    let node = this.head

    // 1. Swap pointers for all nodes --> effective reverse
    while (node !== null) {
      const next = node.next
      node.next = node.prev
      node.prev = next

      node = next
    }

    // 2. Swap head and tail
    const tail = this.tail
    this.tail = this.head
    this.head = tail
  }

  // Get an array of all elements.
  values () {
    const result = []

    let node = this.head

    while (node !== null) {
      result.push(node.data)
      node = node.next
    }

    return result
  }
}
