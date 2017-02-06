
function range (min = 0, max = 1) {
  return Array.apply(0, Array(max - min))
    .map((n, index) => index + min)
}

function sum (a, b) {
  return a + b
}

function ascending (a, b) {
  return a - b
}

function sumAll (bounds) {
  const [min, max] = bounds.sort(ascending)
  return range(min, max + 1)
    .reduce(sum)
}

console.log(sumAll([1, 4]))
