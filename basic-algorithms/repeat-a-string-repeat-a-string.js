
function repeatStringNumTimes (str, num) {
  let res = ''
  while (num > 0) {
    res += str
    --num
  }
  return res
}

repeatStringNumTimes('abc', 3)
