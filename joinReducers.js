module.exports = function() {
  var reducers = Array.from(arguments);
  return function(state, action) {
    return reducers.reduce(function(state, reducer){
      return reducer(state, action);
    }, state);
  };
};
