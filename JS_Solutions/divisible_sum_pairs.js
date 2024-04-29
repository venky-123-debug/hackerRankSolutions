function divisibleSumPairs(n, k, ar) {
  // Write your code here
  let counter = 0

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      let sum = ar[i] + ar[j]
      if (sum % k === 0) {
        counter++
      }
    }

  }

  return counter
}