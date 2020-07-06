const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      const newCollection = (collection instanceof Array) ? collection.slice() : Object.values(collection)
      for(let i = 0; i < newCollection.length; i++){
        callback(newCollection[i], i, newCollection)
      }
      return collection
    },

    map: function(collection, callback) {
      if (!(collection instanceof Array)){
        collection = Object.values(collection)
      }

      let newArr = []

      for(let i = 0; i < collection.length; i++){
        newArr.push(callback(collection[i]))
      }

      return newArr
    },

    reduce: function(collection, callback, acc) {
      if (!(collection instanceof Array)){
        collection = Object.values(collection)
      }

      let reduceArr = collection.slice()

      if (!acc){
        acc = collection[0]
        reduceArr = reduceArr.slice(1)
      }

      for(let i = 0; i < reduceArr.length; i++){
        acc = callback(acc, reduceArr[i], reduceArr)
      }
      return acc
    },

    find: function(collection, predicate) {
      if (!(collection instanceof Array)){
        collection = Object.values(collection)
      }

      for(let i = 0; i < collection.length; i++){
        if(predicate(collection[i])){
          return collection[i]
        }
      }
      return undefined
    },

    filter: function(collection, predicate) {
      if (!(collection instanceof Array)){
        collection = Object.values(collection)
      }

      const returnArray = []
      for(let i = 0; i < collection.length; i++){
        if (predicate(collection[i])){
          returnArray.push(collection[i])
        }
      }
      return returnArray
    },

    size: function(collection) {
      if (!(collection instanceof Array)){
      collection = Object.values(collection)
      }

      return collection.length
    },

    first: function(array, n) {
    return  n ? array.slice(0, n) : array[0]
    },

    last: function(array, n) {
      return n ? array.slice(n * -1) : array[array.length - 1]
    },

    compact: function(array) {
      let truthyArr = []
      for(let i = 0; i < array.length; i++){
        if (array[i]){
          truthyArr.push(array[i])
        }
      }
      return truthyArr
    },

    sortBy: function(array, callback) {
      let newArr = [...array]

      return newArr.sort(function(a, b){
        return callback(a) - callback(b)
      })
    },

    unpackArray: function(targetArr, startArr){
      for (let val of startArr){
        targetArr.push(val)
      }
    },

    flatten: function(array, shallow = false, newArr = []) {

      if (!Array.isArray(array)){
        return newArr.push(array)
      }
      if (shallow){
        for (let val of array){
          Array.isArray(val) ? this.unpackArray(newArr, val) : newArr.push(val) 
        }
      } else{
        for(let val of array){
          this.flatten(val, false, newArr)
        }
      }
      return newArr
    },

    uniqSorted: function(array, callback = () => {}){
      const sorted = [array[0]]
      for(let i = 1; i < array.length; i ++){
        if(sorted[i - 1] !== array[i]){
          sorted.push(array[i])
        }
      }
      return sorted
    },

    uniq: function(array, isSorted = false, callback = false){
      if(isSorted){
        return this.uniqSorted(array, callback)
      }else if(!callback){
        return Array.from(new Set(array))
      }else{
        const modVals = new Set()
        const uniqVals = new Set()
        for (let val of array){
          const callbackVals = callback(val)
          if(!modVals.has(callbackVals)){
            modVals.add(callbackVals)
            uniqVals.add(val)
          }
        }
        return Array.from(uniqVals)
      }
    },

    keys: function(object){
      let keys = []
      for(let key in object){
        keys.push(key)
      }
      return keys
    },

    values: function(object){
      let values = []
      for(let key in object){
        values.push(object[key])
      }
      return values
    },

    functions: function(object){
      let functionsArr = []
      for(let key in object){
        if(typeof object[key] === "function"){
          functionsArr.push(key)
        }
      }
      return functionsArr.sort()
    }
  }
})()

fi.libraryMethod()
