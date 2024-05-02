function beautifulDays(i, j, k) {
  // Write your code here
  let reversed;
  let result = 0;
  for (let l = 0; l <= j - i; l++) {
    // console.log(i, l, j, i + l, j - i);
    reversed = (i + l).toString().split("").reverse().join("");

    reversed = parseInt(reversed);
    if ((i + l - reversed) % k == 0) {
      result++;
    }
  }
  return result;
}
