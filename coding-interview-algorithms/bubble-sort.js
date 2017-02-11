function bubbleSort (array) {
  const lastIndex = array.length - 1

  let sorted = array.slice()
  let itemsInOrder = false

  while (!itemsInOrder) {
    // Assume everything is in order
    let iterationInOrder = true

    for (let i = 0; i < sorted.length; i++) {
      if (i === lastIndex && iterationInOrder) {
        itemsInOrder = true
      } else {
        const before = sorted.slice(0, i) // Skip `item`
        const item = sorted[i]
        const next = sorted[i + 1]
        const after = sorted.slice(i + 2) // Skip `next`

        if (item > next) {
          iterationInOrder = false

          // Swap the two adjacent items
          sorted = [].concat(before, next, item, after)
        }
      }
    }
  }

  return sorted
}

bubbleSort([3, 5, 2, 1, 8, 10, 23, 57, 32, 27])
