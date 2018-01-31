let acorn = require('acorn');

let node = acorn.parse('var n = 42;');

console.log(node);

/*
Node {
  type: 'Program',
  start: 0,
  end: 11,
  body:
   [ Node {
       type: 'VariableDeclaration',
       start: 0,
       end: 11,
       declarations: [Array],
       kind: 'var' } ],
  sourceType: 'script' }
*/