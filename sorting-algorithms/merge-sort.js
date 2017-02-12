function merge (left, right) {
  const result = []

  let l = 0
  let r = 0

  // Pick the smallest number from the beginning of each array.
  while (l < left.length && r < right.length) {
    if (left[l] < right[r]) {
      result.push(left[l++])
    } else {
      result.push(right[r++])
    }
  }

  // Add remaining numbers to the end.
  return result.concat(left.slice(l), right.slice(r))
}

function mergeSort (arr) {
  if (arr.length < 2) return arr
  const middle = Math.floor(arr.length / 2)

  // 1. Recursively slice an array in half.
  // 2. Then merge all halves into order.
  return merge(
    mergeSort(arr.slice(0, middle)),
    mergeSort(arr.slice(middle))
  )
}

mergeSort([3, 5, 2, 1, 8, 10, 23, 57, 32, 27])
