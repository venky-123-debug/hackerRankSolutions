function jumpingOnClouds(c) {
  // Write your code here
  let count = 0
  for (let i = 0; i < c.length - 1; i++) {
    if (c[i + 2] != 1) {
      i++
    }
    count++
    console.log({ i, count })
  }
  return count

}