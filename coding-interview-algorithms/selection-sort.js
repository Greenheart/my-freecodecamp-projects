function selectionSort (array) {
  const sorted = []
  let remaining = array.slice()

  for (let i = 0; i < array.length; i++) {
    sorted.push(Math.min.apply(remaining))
    remaining = remaining.slice(1)
  }

  return sorted
}

selectionSort([3, 5, 2, 1, 8, 10, 23, 57, 32, 27])
