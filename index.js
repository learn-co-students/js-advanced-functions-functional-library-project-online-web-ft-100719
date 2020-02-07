const fi = (function () {
  return {
    libraryMethod: function () {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function (collection, callback) {
      const keys = Object.keys(collection)
      for (let i = 0; i < keys.length; i++) {
        callback(collection[keys[i]])
      }
      return collection
    },

    map: function (collection, callback) {
      const newArray = []
      fi.each(collection, e => newArray.push(callback(e)))
      return newArray
    },

    reduce: function (collection, callback, acc) {
      const collectionArray = fi.map(collection, e => e)
      let workingCollection = collection
      if (acc === undefined) {
        [acc, ...workingCollection] = collectionArray
      }
      fi.each(workingCollection, e => acc = callback(acc, e, collection))
      return acc
    },

    find: function (collection, predicate) {
      const keys = Object.keys(collection)
      for (let i = 0; i < keys.length; i++) {
        let value = collection[keys[i]]
        if (predicate(value)) {
          return value
        }
      }
      return undefined
    },

    filter: function (collection, predicate) {
      const filteredArray = []
      fi.each(collection, e => {
        if (predicate(e)) {
          filteredArray.push(e)
        }
      })
      return filteredArray
    },
    size: function (collection) {
      return Object.keys(collection).length
    },
    first: function (array, n = 1) {
      if (n === 1) {
        return array[0]
      } else {
        const newArray = []
        for (let i = 0; i < n; i++) {
          newArray.push(array[i])
        }
        return newArray
      }
    },
    last: function (array, n = 1) {
      if (n === 1) {
        return array[array.length - 1]
      } else {
        return array.slice(n * -1)
      }
    },
    compact: function (array) {
      return fi.filter(array, e => e)
    },
    sortBy: function (array, callback) {
      return fi.map(array, e => e).sort((a, b) => callback(a) - callback(b))
    },
    flatten: function (array, shallow = false) {
      const newArray = []
      let arrayRemainsFlag = false
      fi.each(array, e => {
        if (Array.isArray(e)) {
          fi.each(e, element => {
            newArray.push(element)
            if (Array.isArray(element)) {
              arrayRemainsFlag = true
            }
          })
        } else {
          newArray.push(e)
        }
      })
      if (shallow || !arrayRemainsFlag) {
        return newArray
      } else {
        return fi.flatten(newArray)
      }
    },
    uniq: function (array, isSorted, callback = e => e) {
      const uniqueArray = []
      if (!isSorted) {
        fi.each(array, e => {
          if (fi.find(uniqueArray, element => callback(element) === callback(e)) === undefined) {
            uniqueArray.push(e)
          }
        })
      } else {
        uniqueArray.push(array[0])
        for (let i = 1; i < array.length; i++) {
          if (callback(array[i]) !== callback(array[i - 1])) {
            uniqueArray.push(array[i])
          }
        }
      }
      return uniqueArray
    },
    keys: function (object) {
      return Object.keys(object)
    },
    values: function (object) {
      return fi.map(object, e => e)
    },
    functions: function (object) {
      return fi.filter(fi.values(object), e => typeof e === "function")
    }

  }
})()

fi.libraryMethod()
