function circularArrayRotation(a, k, queries) {
  // Write your code here
  let result = []
  for (let i = 0; i < k; i++) {
    let lastValue = a.pop()
    a.unshift(lastValue)
  }
  for (let j = 0; j < queries.length; j++) {
    result.push(a[queries[j]])
  }
  return result
}