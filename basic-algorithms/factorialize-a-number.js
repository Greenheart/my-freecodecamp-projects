
function cache (fn, key) {
  if (!fn.cache) {
    fn.cache = {}
  }

  if (!fn.cache[key]) {
    fn.cache[key] = fn(key)
  }
  return fn.cache[key]
}

function memoize (fn) {
  return cache.bind(null, fn)
}

const factorialize = memoize(num => {
  let n = 1
  let res = 1

  while (n <= num) {
    res *= n
    ++n
  }
  return res
})

factorialize(5)
