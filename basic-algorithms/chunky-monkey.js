
function chunkArrayInGroups (arr, size) {
  return arr
          .reduce((groups, item, i) => {
            if (i % size === 0) {
              groups.push(arr.slice(i, i + size))
            }

            return groups
          }, [])
}

chunkArrayInGroups(['a', 'b', 'c', 'd'], 2)
