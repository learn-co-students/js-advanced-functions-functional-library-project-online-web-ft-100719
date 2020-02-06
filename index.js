const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: (collection, callback) =>  {
      let vals = Object.values(collection)
      for(let i = 0; i < vals.length; i++){
        callback(vals[i])
      }
      return collection 
    },

    map: (collection, callback) => {
      let vals = Object.values(collection)
      let newVals = []
      for(let i = 0; i < vals.length; i++) {
        newVals.push( callback(vals[i]) )
      }
      return newVals
    },

    reduce: (collection, callback, acc) => {
      let a = !!acc ? acc : collection[0]
      let i = !!acc ? 0 : 1
      for(i; i < collection.length; i++) {
        a = callback(a, collection[i], collection)
      }
      return a
    },

    find: (collection, predicate) => {
      for(let i = 0; i < collection.length; i++){
       if( predicate(collection[i]) ) {
         return collection[i]
       }
      }
    }, 

    filter: (collection, predicate) => {
      let correct = []
      for(let i = 0; i < collection.length; i++){
        if( predicate(collection[i]) ) {
          correct.push( collection[i] )
        }
       }
       return correct
    },

    size: collection => {
      return Object.values(collection).length 
    },

    first: (collection, n) => {
      let num = !!n ? n : 1
      let selection = collection.slice(0, num)
      if (selection.length === 1 ) {
        return selection[0]
      }
      return selection
    },

    last: (collection, n) => {
      let num = !!n ? -n : -1
      let selection = collection.slice(num)

      if (selection.length === 1 ) {
        return selection[0]
      }
      return selection
    },

    compact: collection => {
      let truthy = []
      for(let i = 0; i < collection.length; i++) {
        if (collection[i]) {
          truthy.push(collection[i])
        }
      }
      return truthy
    }, 

    sortBy: (collection, callback) => {
      let sorted = [...collection]
      return sorted.sort( (a, b) => {
        return callback(a) - callback(b)
      }) 
    },

    flatten: (collection, shallow) => {
      // ??? 
    },

  }
})()

fi.libraryMethod()
