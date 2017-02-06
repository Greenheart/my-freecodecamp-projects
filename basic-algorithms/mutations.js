
function mutation ([str, chars]) {
  str = str.toLowerCase()
  return chars
    .toLowerCase()
    .split('')
    .every(char => str.includes(char))
}

mutation(['hello', 'hey'])
