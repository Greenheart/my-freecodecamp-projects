
function compare (a, b) {
  return a.reduce((diff, item) => {
    if (!b.includes(item)) {
      diff.push(item)
    }

    return diff
  }, [])
}

function diffArray (arr1, arr2) {
  return compare(arr1, arr2)
    .concat(compare(arr2, arr1))
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5])
