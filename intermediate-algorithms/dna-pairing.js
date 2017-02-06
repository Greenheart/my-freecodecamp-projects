
function pairElement (str) {
  const lookup = {
    'G': 'C',
    'C': 'G',
    'A': 'T',
    'T': 'A'
  }

  return str
          .split('')
          .map(element => [element, lookup[element]])
}

pairElement('GCG')
