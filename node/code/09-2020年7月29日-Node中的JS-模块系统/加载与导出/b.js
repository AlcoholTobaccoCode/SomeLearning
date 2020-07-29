var foo = 'bbb';

// const fileRead = require('fs');

exports.foo = 'bbb hello';

exports.readFile = ( path, callback )=> {
  console.log('文件路径: ', path)
}

exports.add = (x, y) => {
  return x + y
}