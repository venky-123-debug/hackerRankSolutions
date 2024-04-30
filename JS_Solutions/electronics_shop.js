function getMoneySpent(keyboards, drives, b) {
  let maxBudget = -1;

  for (let i = 0; i < keyboards.length; i++) {
    for (let j = 0; j < drives.length; j++) {
      let sum = keyboards[i] + drives[j];
      // console.log({ sum, maxBudget });
      if (sum <= b && sum > maxBudget) {
        maxBudget = sum;
      }
    }
  }
  console.log({ maxBudget });
  return maxBudget;
}

// function getMoneySpent(keyboards, drives, b) {
//   /*
//    * Write your code here.
//    */
//   let maxBudget = 0
//   let buyArray = []
//   for (let i = 0; i <= keyboards.length; i++) {
//     for (let j = 0; j <= drives.length; j++) {
//       let sum = keyboards[i] + drives[j]
//       if (sum < b) {
//         buyArray = [...buyArray, sum]
//       }
//     }
//   }
//   maxBudget = Math.max(...buyArray)
//   if (maxBudget < b && buyArray.length) return maxBudget
//   else return -1
// }

let b = 10;
let keyboards = [3, 1];
let drives = [5, 2, 8];
getMoneySpent(keyboards, drives, b);
