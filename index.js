const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      let newColl = Object.assign({}, collection);

      for (const key in newColl) {
        callback(newColl[key]);
      }

      return collection;
    },

    map: function(collection, callback) {
      let newColl = Object.assign({}, collection);
      let newArr = [];

      for (const key in newColl) {
        newArr.push(callback(newColl[key]));
      }

      return newArr;
    },

    reduce: function(collection, callback, acc) {
      let total = (acc ? acc : collection[0]);

      let i = (total === collection[0] ? 1 : 0)

      for (i; i < collection.length; i++) {
        total = callback(total, collection[i], collection);
      }

      return total;
    },

    find: function(collection, predicate) {
      for (const value of collection) {
        if (predicate(value)) { return value }
      }
    },

    filter: function(collection, predicate) {
      let trueValues = [];

      for (const value of collection) {
        if (predicate(value)) { trueValues.push(value) }
      }

      return trueValues;
    },

    size: function(collection) {
      const newObj = Object.assign({}, collection);
      return Object.values(newObj).length;
    },

    first: function(array, n) {
      let index = (n ? n : 0)
      if (index === 0) {
        return array[index];
      } else {
        return array.slice(0, index);
      }
    },

    last: function(array, n) {
      const last = array.length
      let index = (n ? n : -1)

      if (index < 0) {
        return array[array.length - 1];
      } else {
        return array.slice(index * -1);
      }
    },

    compact: function(array) {
      return fi.filter(array, x => { return Boolean(x) == true } )
    },

    sortBy: function(array, callback) {
      let newArr = [...array];

      newArr.sort(function(a, b){ return callback(a) - callback(b) })

      return newArr;
    },

    flatten: function(array, singleLevel) {
      if (singleLevel === true) {
        return [].concat(...array)

      } else {
        const flatten = list => list.reduce(
          (a, b) => a.concat(Array.isArray(b) ? flatten(b) : b), []
        );

        return flatten(array);
      }
    },

    uniqSorted: function(array, callback) {
      let sorted = [array[0]];

      for(let i = 1; i < array.length; i++) {
        if (sorted[i-1] !== array[i]) {
          sorted.push(array[i])
        }
      }

      return sorted;
    },

    uniq: function(array, isSorted=false, callback) {
      let newArr = [...array];

      if (isSorted) {
        return fi.uniqSorted(array, callback)
      }
      else if (!callback) {
        return [...new Set(newArr)]
      }
      else {
        // [...new Set(newArr)];
        let newSet = new Set();
        let uniqVals = new Set();

        for (let value of array) {
          let modified = callback(value);
          if (!newSet.has(modified)) {
            newSet.add(modified)
            uniqVals.add(value)
          }
        }
        return Array.from(uniqVals);
      }
    },

    keys: function(object) {
      let keyArr = [];

      for (const key in object) {
        keyArr.push(key)
      }

      return keyArr;
    },

    values: function(object) {
      let valueArr = [];

      for (const key in object) {
        valueArr.push(object[key])
      }

      return valueArr;
    },

    functions: function(object) {
      let functions = [];

      for (const key in object) {
        if (typeof object[key] === 'function') { functions.push(object[key]) }
      }

      return functions;
    },

    // giveMeMore: function() {

    // }

  }
})()

fi.libraryMethod()
