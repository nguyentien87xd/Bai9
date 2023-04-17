function insert(value) {
  document.getElementById("value1").value += value;
}

function clearInput() {
  document.getElementById("value1").value = "";
}

function deleteLast() {
  let value = document.getElementById("value1").value;
  document.getElementById("value1").value = value.substr(0, value.length - 1);
}

function add() {
  document.getElementById("value1").value += "+";
}

function subtract() {
  document.getElementById("value1").value += "-";
}

function multiply() {
  document.getElementById("value1").value += "*";
}

function divide() {
  document.getElementById("value1").value += "/";
}

function calculate() {
  let expression = document.getElementById("value1").value;
  let result = eval(expression);
  document.getElementById("value1").value = result;
}