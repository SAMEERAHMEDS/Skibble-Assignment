function calulate(ele) {
  const number1 = parseInt(document.getElementById("num1").value);
  const number2 = parseInt(document.getElementById("num2").value);

  var exp = ele.innerText;
  var result;

  switch (exp) {
    case "+":
      result = number1 + number2;
      break;
    case "-":
      result = number1 - number2;
      break;
    case "*":
      result = number1 * number2;
      break;
    case "/":
      result = number1 / number2;
      break;
  }

  val = document.getElementById("res");
  val.value = result;
}
