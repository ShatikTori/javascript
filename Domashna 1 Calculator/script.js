const number1 = 10
const number2 = 2
let operation = '/'
let result


if (number2 === 0) {
    console.log("Cannot divide by zero")
} else if (number2 > 0) {
switch (operation) {
    case '+': {
        result = number1 + number2
        console.log(number1 + " + " + number2 + " = " + result)
        break
    }
  
    case '-': {
        result = number1 - number2
        console.log(number1 + " - " + number2 + " = " + result)
        break
    }
  
    case '*': {
        result = number1 * number2
        console.log(number1 + " * " + number2 + " = " + result)
        break
    }
  
    case '/': {
        result = number1 / number2
        console.log(number1 + " / " + number2 + " = " + result)
        break
      }

    case '%': {
        result = number1 % number2
        console.log("Остатокот од поделбата на првиот број со вториот е " + result)
    } 
  }}