/*
  This solution is pretty clean since it naively chooses the pivot value.
  It initially returned an array literal and used two spread operators,
  but as Array.concat() improves both speed and readability, it was a better option.
*/
function quickSort (arr) {
  if (arr.length === 0) return arr
  // Extract pivot but keep remaining.
  // By copying the contents of arr, we also avoid mutating the input.
  // Bad for efficiency but good for code reasonability.
  const [pivot, ...remaining] = arr
  return quickSort(remaining.filter(n => n < pivot))
          .concat(
            pivot,
            // Use >= to include possible duplicates of the pivot.
            quickSort(remaining.filter(n => n >= pivot))
          )
}

quickSort([3, 5, 2, 1, 8, 10, 23, 57, 32, 27])
