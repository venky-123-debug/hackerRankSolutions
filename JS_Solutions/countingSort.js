function countingSort(arr) {
  // Write your code here
  let freqArr = new Array(100).fill(0);
  console.log({ freqArr })

  for (let i of arr) {
    // fot(let i=0;i<arr.length;i++) {
    freqArr[i] += 1;
  }
  // }
  console.log({ freqArr })
  return freqArr;

}
