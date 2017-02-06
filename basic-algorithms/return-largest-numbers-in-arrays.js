
function largestOfFour (arr) {
  return arr.map(subArr =>
    subArr.reduce(getLargestNumber)
  )
}

function getLargestNumber (a, b) {
  return Math.max(a, b)
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]])
