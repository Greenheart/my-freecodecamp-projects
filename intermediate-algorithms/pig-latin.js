
function translatePigLatin (str) {
  const consonants = /[^aeiou]+/

  if (!consonants.test(str[0])) {
    return str + 'way'
  }

  const cluster = str.match(consonants)
  return str
          .replace(cluster, '') + cluster + 'ay'
}

translatePigLatin('consonant')
