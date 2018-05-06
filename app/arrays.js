exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    return arr.indexOf(item);
  },

  sum: function(arr) {
    return arr.reduce((accu, item) => {
      return accu + item;
    }, 0);
  },

  remove: function(arr, item) {
    return arr.filter(number => number != item);
  },

  removeWithoutCopy: function(arr, item) {
    for (let i = arr.length - 1; i >= 0; i--) {
      if (arr[i] === item) {
        arr.splice(i, 1);
      }
    }
    return arr;
  },

  append: function(arr, item) {
    return arr.concat(item);
  },

  truncate: function(arr) {
    // in place

    // arr.pop();
    // return arr

    //--------------------------------

    // another in place

    // arr.splice(-1, 1);
    // return arr

    //--------------------------------
    
    // copy does not mutate original
    
    return arr.slice(0, -1);
  },
  
  prepend: function(arr, item) {
    // works
    // arr.splice(0, 0, item);
    
    //--------------------------------
    
    // best practice
    arr.unshift(item);
    return arr;
  },
  
  curtail: function(arr) {
    // works
    // return arr.slice(1);
    
    //--------------------------------
    
    // best practice
    arr.shift();
    return arr;
  },

  concat: function(arr1, arr2) {
    //return arr1.concat(arr2);

    return [...arr1, ...arr2];
  },

  insert: function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count: function(arr, item) {
    
  },

  duplicates: function(arr) {},

  square: function(arr) {},

  findAllOccurrences: function(arr, target) {}
};
