
const number1 = parseFloat(prompt('What is Bitcoin price today? '));
const number2 = parseFloat(prompt('How much $ do you have? '));
const result = (number2/number1).toFixed(7)
document.write ("You can buy "+result+" BTC");