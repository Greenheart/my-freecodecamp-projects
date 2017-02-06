
function keepLetters (str) {
  return str.replace(/[^a-zA-Z0-9]/gi, '')
}

function palindrome (str) {
  const forward = keepLetters(str.toLowerCase()).split('')
  const backward = forward.slice().reverse()

  return forward.every((char, i) =>
    char === backward[i]
  )
}

palindrome('eye')
