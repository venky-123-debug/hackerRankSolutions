function superDigit(n, k) {
  if (n.length === 1) {
    return parseInt(n);
  }

  let sum = 0;
  for (let i = 0; i < n.length; i++) {
    sum += parseInt(n[i]);
    console.log({sum})
  }

  sum *= k;
  console.log("superDigit(sum.toString(), 1)", superDigit(sum.toString(), 1));
  return superDigit(sum.toString(), 1);
}
let n = '9875';
let k = 3;
superDigit(9875, 4);
