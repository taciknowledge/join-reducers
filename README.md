# joinReducers

`joinReducers(f1, f2, .., fk)` returns new reducer that returns same result of `fk(... f2(f1(state, action), action) ..., action)`.

## Usage

```
var joinReducer = require('join-reducers');

// assumes two reducers
function reduceA(state, action) {
  switch (action.type) {
    case 'ACTION_A':
      return state + 'a';
    default:
      return '';
  }
}

function reduceB(state, action) {
  switch (action.type) {
    case 'ACTION_B':
      return state + 'b';
    default:
      return '';
  }
}

// joins two reducers
var reducer = joinReducers(reduceA, reduceB);

console.log(reducer('', { type: 'A'})); // 'a';
console.log(reducer(reducer('', { type: 'A'})), { type: 'B' }); // 'ab';
```
