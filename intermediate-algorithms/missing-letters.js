
function fearNotLetter (str) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'
  const start = alphabet.indexOf(str[0])
  return alphabet
          .slice(start, start + str.length)
          .split('')
          .find(letter => !str.includes(letter))
}

fearNotLetter('abce')
