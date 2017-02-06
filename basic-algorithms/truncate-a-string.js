
function truncateString (str, num) {
  if (str.length > num) {
    const end = num > 3 ? num - 3 : num
    return str.substring(0, end) + '...'
  }

  return str
}

truncateString('A-tisket a-tasket A green and yellow basket', 11)
