function minimumDistances(a) {
  // Write your code here

  let minDist = []
  for (let i = 0; i < a.length; i++) {
    for (let j = a.length - 1; j < a.length && j > 0; j--) {
      if (a[i] === a[j] && (j - i !== 0)) {
        // console.log(i - j)
        // console.log({ i, j }, a[i], a[j])
        console.log({ minDist })
        minDist.push(Math.abs(i - j))
      }
    }
  }
  if (!minDist.length) return -1
  else return Math.min(...minDist)
}