function kaprekarNumbers(p, q) {
  // Write your code here
  let result = ""
  while (p <= q) {
    let d = String(p).length
    let nPowerTwo = String(Math.pow(p, 2))

    // console.log({nPowerTwo},nPowerTwo.length, d,nPowerTwo.length - d)
    // return
    let rightSide = nPowerTwo.substring(nPowerTwo.length - d)
    let leftSide = nPowerTwo.substring(0, nPowerTwo.length - d)

    // console.log({ rightSide, leftSide })
    rightSide = parseInt(rightSide)
    leftSide = parseInt(leftSide)
    // console.log({ rightSide, leftSide ,p})

    if ((rightSide + leftSide) === p) {
      result += String(p)

      // console.log("result",{ rightSide, leftSide ,p})
      result += " "
    } else if (p === 1) {
      result += String(p)
      result += " "
    }
    p++
  }
  if (result == "") {
    result = "INVALID RANGE"
  }
  console.log(result)
}