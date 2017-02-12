function findIndexFor (num, array) {
  let i = array.length
  while (array[i - 1] > num) --i

  return i
}

function insertionSort (array) {
  return array
          .slice()
          .reduce((sorted, item) => {
            sorted.splice(findIndexFor(item, sorted), 0, item)

            return sorted
          }, [])
}

insertionSort([3, 5, 2, 1, 8, 10, 23, 57, 32, 27])
