
function dropElements (arr, func) {
  let isDropping = true

  return arr
          .filter(x => {
            if (!isDropping || func(x)) {
              isDropping = false
              return true
            }

            return false
          })
}

dropElements([1, 2, 3], n => n < 3)
