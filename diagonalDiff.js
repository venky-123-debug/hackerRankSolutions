function diagonalDifference(arr) {
  // Write your code here
  let n = arr.length;
  let d1 = 0;
  let d2 = 0;

  for (let i = 0; i < n; i++) {
    d1 += arr[i][i];
    d2 += arr[i][n - 1 - i];
  }

  return Math.abs(d1 - d2);
}