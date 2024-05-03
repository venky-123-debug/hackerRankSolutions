function findDigits(n) {
  // Write your code here
  // console.log(typeof n)
  let split = splitNumberIntoDigits(n)
  // console.log({split})
  let divide = 0
  for (let i = 0; i < split.length; i++) {
    if (n % split[i] == 0) {
      divide++
    }

  }
  return divide

}
function splitNumberIntoDigits(number) {
  return number
    .toString()
    .split("")
    .map(Number);
}