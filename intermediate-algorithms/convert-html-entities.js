
function convertHTML (str) {
  const HTMLEntities = {
    '&': '&amp;',
    '"': '&quot;',
    '\'': '&apos;',
    '<': '&lt;',
    '>': '&gt;'
  }

  return str
          .split('')
          .map(char => HTMLEntities[char] || char)
          .join('')
}

convertHTML('Dolce & Gabbana')
