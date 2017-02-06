// Take 1:
// Shared caching slightly improve performance - by sacrificing readability.
function sumOdd (total, n) {
  if (n % 2 !== 0) {
    total += n
  }

  return total
}

function sumFibs (num) {
  const self = sumFibs
  const length = self.cache.length

  let endIndex
  let n = self.cache[length - 1]

  // Continue caching the sequence
  if (n <= num) {
    if (length > 1) {
      n = self.cache[length - 1] + self.cache[length - 2]
    }

    while (n <= num) {
      self.cache.push(n)
      n = self.cache[self.cache.length - 1] + self.cache[self.cache.length - 2]
    }

    endIndex = self.cache.length
  } else {
    endIndex = self.cache.findIndex(n => n > num)
  }

  // Use the relevant part of the sequence
  return self.cache
          .slice(0, endIndex)
          .reduce(sumOdd, 0)
}

// Initial setup
sumFibs.cache = [1]
sumFibs(4)

// Take 2:
// Feels like a bruteforce solution but is actually pretty efficient for
// small input numbers. Chosen for its readability.
function sumFibs2 (num) {
  const sequence = [1]
  let n = 1

  while (n <= num) {
    sequence.push(n)
    n = sequence[sequence.length - 1] + sequence[sequence.length - 2]
  }

  // Reused reducer from first solution.
  return sequence.reduce(sumOdd, 0)
}

sumFibs2(4)
