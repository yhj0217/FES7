function add(x, y) {
  return x + y;
}
function minus(x, y) {
  return x - y;
}
function divid(x, y) {
  return x / y;
}
function multi(x, y) {
  return x * y;
}
add(1, 2);

function makeNum(str) {
  return parseInt(str.replaceAll(",", ""));
}

function printArr(str) {
  console.log(str);
  return str.split("");
}

function sumAndSquare(a, b) {
  return (a + b) ** 2;
}
function calcFunction(x) {
  return x ** 2 + 4 * x - 12;
}
