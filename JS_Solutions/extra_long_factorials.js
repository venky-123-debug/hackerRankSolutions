function extraLongFactorials(n) {
  // Write your code here
  let fact = 1
  if (n == 0 || n == 1) {
    console.log(fact)
    return
  } else {
    for (let i = 1; i < n + 1; i++) {
      fact = BigInt(fact) * BigInt(i)
    }

    console.log(fact.toString())
  }
  // n = BigInt(n)
  // console.log( n===0n? 1n:n * extraLongFactorials(n - 1n))



}