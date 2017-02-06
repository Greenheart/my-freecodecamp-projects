function findLongestWord (str) {
  return str
          .split(' ')
          .reduce((longest, word) => Math.max(longest, word.length), 0)
}

findLongestWord('The quick brown fox jumped over the lazy dog')
