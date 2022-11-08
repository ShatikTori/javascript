const number1 = 10
const number2 = 3
let operation = '%'
let result


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
  }