// 相加方法
function add() {
  let add = 0;
  for ( let i = 0; i < arguments.length; i++ ) {
    add += arguments[i];
  }
  return add;
}

// 相乘方法
function mul() {
  let mul = 1;
  for ( let i = 0; i < arguments.length; i++ ) {
    mul *= arguments[i];
  }
  return mul;
}

// 导出
module.exports = {
  add,
  mul
}