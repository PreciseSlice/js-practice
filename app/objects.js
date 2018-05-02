exports = typeof window === 'undefined' ? global : window;

exports.objectsAnswers = {
  alterContext: function(fn, obj) {
    const newObj = Object.assign({}, obj, {fn});
    return newObj.fn();
  },

  // alterContext: function(fn, obj) {
  //   anotherObj = {
  //     name: obj.name,
  //     greeting: obj.greeting,
  //     newFn: fn
  //   }

  // return anotherObj.newFn()
  // },

  alterObjects: function(constructor, greeting) {
    constructor.prototype.greeting = greeting
  },

  iterate: function(obj) {}
};
