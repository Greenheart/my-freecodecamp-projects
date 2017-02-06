
function convertToRoman (num) {
  const lookup = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  }

  let n = num
  let numeral = ''

  // Iterate in order as the properties were added to the lookup.
  for (const char in lookup) {
    while (n >= lookup[char]) {
      numeral += char
      n -= lookup[char]
    }
  }

  return numeral
}

convertToRoman(36)
