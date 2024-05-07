function beautifulTriplets(d, arr) {
  // Write your code here
  let count = 0
  arr.sort((a, b) => a - b)
  for (let i = 0; i < arr.length; i++) {
    let first = arr[i]
    let second = first + d
    let third = second + d
    
    console.log({first,second,third})
    if (arr.includes(second) && arr.includes(third)) {
      count++
    }
  }
  return count
}