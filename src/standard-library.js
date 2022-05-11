const all =
  (fn) =>
  (...list) =>
    list.reduce(fn);

const add = all((a, b) => a + b);
const sub = all((a, b) => a - b);
const mult = all((a, b) => a * b);
const divide = all((a, b) => a / b);
const modulo = all((a, b) => a % b);
const log = console.log;
const max = all((a, b) => (a > b ? a : b));
const min = all((a, b) => (a < b ? a : b));
const pi = Math.PI;
const e = Math.E;
// const abs = Math.abs;
// const floor = Math.floor;
// const ceil = Math.ceil;
// const round = Math.round;
const rand = Math.random();
// const sin = Math.sin;
// const cos = Math.cos;
// const tan = Math.tan;
// const asin = Math.asin;
// const acos = Math.acos;
// const atan = Math.atan;
// const sqrt = Math.sqrt;
// const pow = Math.pow;
// const exp = Math.exp;
// const log10 = Math.log10;
// const log2 = Math.log2;
// const log1p = Math.log1p;

const environment = {
  add,
  sub,
  mult,
  divide,
  modulo,
  log,
  pi,
  e,
  max,
  min,
  rand,
};

module.exports = { environment };
