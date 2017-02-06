
function titleCase (str) {
  return str.split(' ')
    .map(word => word.toLowerCase())
    .map(word => word[0].toUpperCase() + word.slice(1))
    .join(' ')
}

titleCase("I'm a little tea pot")
