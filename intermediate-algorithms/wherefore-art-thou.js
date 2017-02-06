
function whatIsInAName (collection, source) {
  const arr = []
  const sourceKeys = Object.keys(source)

  collection.forEach(obj => {
    if (sourceKeys.every(key => obj[key] === source[key])) {
      arr.push(obj)
    }
  })
  return arr
}

whatIsInAName([{ first: 'Romeo', last: 'Montague' }, { first: 'Mercutio', last: null }, { first: 'Tybalt', last: 'Capulet' }], { last: 'Capulet' })
