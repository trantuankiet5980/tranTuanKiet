var s1 = null;
var s2 = null;
var s = null;
var result = document.getElementById('result');

function pressNumber(num) {
  if (result.value == '0') {
    result.value = num;
  } else {
    result.value += num;
  }
}

function pressOperator(op) {
  s1 = parseFloat(result.value);
  s = op;
  result.value = '0';
}

function calculate() {
  s2 = parseFloat(result.value);
  var res;
  switch (s) {
    case '+':
      res = s1 + s2;
      break;
    case '-':
      res = s1 - s2;
      break;
    case '*':
      res = s1 * s2;
      break;
    case '/':
      res = s1 / s2;
      break;
    default:
      res = s2;
  }
  result.value = res;
  s1 = null;
  s2 = null;
  s = null;
}
function deleteNumber() {
    result.value = result.value.slice(0, -1);
}

function deleteAllNumber() {
    result.value = '';
}