
function confirmEnding (str, target) {
  return str.includes(target) &&
         target === str.slice(str.indexOf(target))
}

confirmEnding('Bastian', 'n')
