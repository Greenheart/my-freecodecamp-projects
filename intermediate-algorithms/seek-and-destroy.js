
function destroyer (arr, ...unwanted) {
  return arr.filter(item => !unwanted.includes(item))
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3)
