var assert = require('assert');
var joinReducers = require('./joinReducers');

function reducerA(s, a) {
  switch (a.type) {
    case 'A':
      s.passed_a = true;
      s.last_processed = 'A';
      return s;
    default:
      return s;
  }
}

function reducerB(s, a) {
  switch(a.type) {
    case 'B':
      s.passed_b = true;
      s.last_processed = 'B';
      return s;
    default:
      return s;
  }
}

var reducer = joinReducers(reducerA, reducerB);

assert.deepEqual(
  reducer(
    {
      passed_a: false,
      passed_b: false,
      last_processed: null,
    },
    { type: 'A'}
  ), {
    passed_a: true,
    passed_b: false,
    last_processed: 'A',
  }
);

assert.deepEqual(
  reducer(
    {
      passed_a: false,
      passed_b: false,
      last_processed: null,
    },
    { type: 'B'}
  ), {
    passed_a: false,
    passed_b: true,
    last_processed: 'B',
  }
);

assert.deepEqual(
  reducer(
    reducer(
      {
        passed_a: false,
        passed_b: false,
        last_processed: null,
      },
      { type: 'A'}
    ),
    { type: 'B' }
  ), {
    passed_a: true,
    passed_b: true,
    last_processed: 'B',
  }
);


