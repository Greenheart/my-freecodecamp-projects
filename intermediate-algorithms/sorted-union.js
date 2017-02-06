
function flatten (a, b) {
  return a.concat(b)
}

function keepUnique (item, index, array) {
  return index === array.indexOf(item)
}

function uniteUnique (...collection) {
  return collection
          .reduce(flatten, [])
          .filter(keepUnique)
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])
