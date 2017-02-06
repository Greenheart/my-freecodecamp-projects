
function spinalCase (str) {
  return str
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .toLowerCase()
    .split(/(?:_| )+/)
    .join('-')
}

spinalCase('This Is Spinal Tap')
