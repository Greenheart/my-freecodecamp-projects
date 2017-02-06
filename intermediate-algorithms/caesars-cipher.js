
function rot (n) {
  const first = 65 + n
  const last = 90

  const specialCharCodes = [
    59,    // ;
    46,    // .
    44,    // ,
    33,    // !
    63,    // ?
    58,    // :
    45,    // -
    34,    // "
    39,    // '
    47,    // /
    40,    // (
    41,    // )
    32    // ' ' (space)
  ]

  return code => {
    if (!specialCharCodes.includes(code)) {
      if (code < first) {
        code = last - ((first - 1) - code)
      } else {
        code -= n
      }
    }

    return code
  }
}

function rot13 (str) { // LBH QVQ VG!
  return str.split('')
    .map(char => char.charCodeAt())
    .map(rot(13))
    .map(code => String.fromCharCode(code))
    .join('')
}

console.log(rot13('SERR PBQR PNZC'))
