function repeatedString(s, n) {
  // Write your code here
  let totalAs = 0
  let repeatStrLength = s.length
  let repeatingCount = Math.floor(n / repeatStrLength)
  let aCount = 0

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "a") aCount++
  }
  totalAs = totalAs + (aCount * repeatingCount)

  // console.log({ totalAs, aCount, s, n, repeatStrLength })

  if (n % repeatStrLength !== 0) {
    let remainders = n % repeatStrLength
    console.log({ remainders })
    for (let i = 0; i < remainders; i++) {
      if (s[i] === "a") {
        console.log({ s })

         console.log({ totalAs})
        totalAs = totalAs+1
      }
    }
  }
  return totalAs

}