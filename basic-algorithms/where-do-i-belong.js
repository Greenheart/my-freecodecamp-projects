
const ascending = (a, b) => a - b

function getIndexToIns (arr, target) {
  // Brute force sorting
  return [...arr, target]
    .sort(ascending)
    .indexOf(target)
}

getIndexToIns([40, 60], 50)
