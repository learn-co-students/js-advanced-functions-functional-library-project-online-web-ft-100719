const fi = (function() {
  return {
    libraryMethod: function() {
      return "Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0";
    },

    each: function(collection, callback) {
      for (let key in collection) {
        callback(collection[key], key, collection);
      }
      return collection;
    },

    map: function(collection, callback) {
      let newCollection = [];
      for (let key in collection) {
        newCollection.push(callback(collection[key], key, collection));
      }
      return newCollection;
    },

    reduce: function(collection, callback, acc = 0) {
      let total = collection[0];
      for (let i = 0; i < collection.length; i++) {
        if (acc) {
          acc = callback(acc, collection[i], collection);
          total = acc;
        } else if (i < collection.length - 1) {
          total = callback(total, collection[i + 1], collection);
        }
      }
      return total;
    },

    find: function(collection, predicate) {
      return collection.find(predicate);
    },

    filter: function(collection, predicate) {
      return collection.filter(predicate);
    },

    size: function(collection) {
      return Object.keys(collection).length;
    },
    first: function(array, n = 0) {
      let first = [];
      if (!n) {
        first = array[0];
      } else {
        for (let i = 0; i < n; i++) {
          first.push(array[i]);
        }
      }
      return first;
    },
    last: function(array, n = 0) {
      if (!n) return array[array.length - 1];
      return array.slice(-n);
    },
    compact: function(array) {
      const newArray = [];
      for (const element of array) {
        if (element) newArray.push(element);
      }
      return newArray;
    },
    sortBy: function(collection, callback) {
      const newCollection = Object.assign([], collection);
      return newCollection.sort((a, b) => callback(a) - callback(b));
    },

    flatten: function(collection, shallow = false) {
      const newCollection = [];
      const iterate = (collection, shallow) => {
        for (let i = 0; i < collection.length; i++) {
          if (typeof collection[i] === "object") {
            if (shallow) {
              for (let j = 0; j < collection[i].length; j++) {
                newCollection.push(collection[i][j]);
              }
            } else {
              iterate(collection[i]);
            }
          } else {
            newCollection.push(collection[i]);
          }
        }
      };

      iterate(collection, shallow);

      return newCollection;
    },
    uniq: function(collection, isSorted = false, callback = false) {
      const newCollection = [];

      for (let i = 0; i < collection.length; i++) {
        if (callback) {
          if (
            !newCollection.some(
              element => callback(element) === callback(collection[i])
            )
          )
            newCollection.push(collection[i]);
        } else {
          if (!newCollection.some(element => element === collection[i]))
            newCollection.push(collection[i]);
        }
      }
      return newCollection;
    },
    keys: function(object) {
      const newArray = [];
      for (const key in object) {
        newArray.push(key);
      }
      return newArray;
    },
    values: function(object) {
      const newArray = [];
      for (const key in object) {
        newArray.push(object[key]);
      }
      return newArray;
    },
    functions: function(object) {
      const newArray = [];
      for (const key in object) {
        if (typeof object[key] === "function") newArray.push(key);
      }
      return newArray;
    }
  };
})();

fi.libraryMethod();
