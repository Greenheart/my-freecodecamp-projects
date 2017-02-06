
function cache (fn, key) {
  if (!fn.cache) {
    fn.cache = {}
  }

  if (fn.cache[key] === undefined) {
    fn.cache[key] = fn(key)
  }

  return fn.cache[key]
}

function memoize (fn) {
  return cache.bind(null, fn)
}

/* Based on: https://stackoverflow.com/a/17390131 */
const isPrime = memoize(n => {
  const sqrt = Math.sqrt(n)
  let start = 2

  while (start <= sqrt) {
    if (n % start++ < 1) {
      return false
    }
  }

  return n > 1
})

function generatePrimes (num) {
  const primes = []

  for (let n = 2; n <= num; n++) {
    if (isPrime(n)) {
      primes.push(n)
    }
  }

  return primes
}

const sum = (a, b) => a + b

function sumPrimes (num) {
  return generatePrimes(num)
          .reduce(sum)
}

sumPrimes(10)
