
function isLowerCase (str) {
  return str === str.toLowerCase()
}

function preserveCase (before, after) {
  const beforeIsLower = isLowerCase(before[0])
  const afterIsLower = isLowerCase(after[0])

  let preserved

  if (beforeIsLower !== afterIsLower) {
    if (beforeIsLower) {
      preserved = after[0].toLowerCase() + after.slice(1)
    } else {
      preserved = after[0].toUpperCase() + after.slice(1)
    }
  } else {
    preserved = after
  }

  return [before, preserved]
}

function myReplace (str, before, after) {
  return str.replace(...preserveCase(before, after))
}

myReplace('A quick brown fox jumped over the lazy dog', 'jumped', 'leaped')
