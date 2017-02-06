
function bouncer (arr) {
  return arr.filter(item => Boolean(item))
}

bouncer([7, 'ate', '', false, 9])
