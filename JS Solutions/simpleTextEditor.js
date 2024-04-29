function processData(input) {
  //Enter your code here
  let lines = input.split("\n")
  let query = parseInt(lines[0]);
  let resultString = ""
  const stack = [];
  stack.push(resultString);

  for (let i = 1; i <= query; i++) {
    let resultString = lines[i].split(' ');
    let operation = parseInt(splitLine[0]);
    let argument = splitLine[1];
    switch (operation) {
      case 1:
        resultString += argument;
        stack.push(resultString);
        break;
      case 2:
        resultString = resultString.substring(0, resultString.length - parseInt(argument));
        // resultString = resultString.substring(0, resultString.length - parseInt(argument));
        stack.push(resultString);
        break;
      case 3:
        console.log(resultString.charAt(parseInt(argument) - 1));
        break;
      case 4:
        stack.pop();
        resultString = stack[stack.length - 1];
        break;
    }
  }
}