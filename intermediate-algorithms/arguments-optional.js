
function isNumber (n) {
  return typeof n !== 'number'
}

function addTogether (...args) {
  if (args.some(isNumber)) return

  if (args.length === 1) {
    return x => isNumber(x) ? undefined : args[0] + x
  }

  return args[0] + args[1]
}

addTogether(2, 3)
