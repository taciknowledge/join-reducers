var arrayFrom = require('array-from');

module.exports = function() {
  var reducers = arrayFrom(arguments);
  return function(state, action) {
    return reducers.reduce(function(state, reducer){
      return reducer(state, action);
    }, state);
  };
};
