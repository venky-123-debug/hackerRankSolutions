function hurdleRace(k, height) {
  // Write your code here
  let maxHeight = Math.max(...height);
  let result = 0;

  if (k > maxHeight) {
    return result;
  } else {
    result = maxHeight - k;
    console.log({result,maxHeight,k});
    return result;
  }
}

let k = 4
let height = [1, 6, 3, 5, 2];

console.log(hurdleRace(k, height));
