
function findElement (arr, func) {
  // Really!? A built in method completely passing the tests?
  return arr.find(func)
}

findElement([1, 2, 3, 4], num => num % 2 === 0)
