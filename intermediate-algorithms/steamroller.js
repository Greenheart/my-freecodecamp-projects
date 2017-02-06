
const deepFlatten = arr => (
  arr.reduce((a, b) => (
    a.concat(Array.isArray(b) ? deepFlatten(b) : b)
  ), [])
)

function steamrollArray (arr) {
  return deepFlatten(arr)
}

steamrollArray([1, [2], [3, [[4]]]])
