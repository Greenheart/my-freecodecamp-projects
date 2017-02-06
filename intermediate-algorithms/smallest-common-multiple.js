
function range (min = 0, max = 1) {
  return Array.apply(0, Array(max - min))
    .map((num, index) => index + min)
}

const ascending = (a, b) => a - b

function greatestCommonDenominator (a, b) {
  if (b === 0) return a

  return greatestCommonDenominator(b, a % b)
}

function smallestCommonMultiplier (a, b) {
  return a * b / greatestCommonDenominator(a, b)
}

function smallestCommons (arr) {
  const [min, max] = arr.slice().sort(ascending)
  return range(min, max + 1)
          .reduce(smallestCommonMultiplier)
}

smallestCommons([1, 5])
