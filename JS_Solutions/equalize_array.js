function equalizeArray(arr) {
  // Write your code here
  let obj = {}
  let max = 0
  for (let i of arr) {
    obj[i] = (obj[i] || 0) + 1
    if (max < obj[i]) max = obj[i]
  }
  return arr.length - max

}