function permutationEquation(p) {
  // Write your code here
  let y = []
  for (let i = 0; i < p.length; i++) {
    for (let j = 0; j < p.length; j++) {
      console.log({i,j},p[j])
      if (i + 1 === p[p[j] - 1]) {
      console.log(i+1,p[j]-1)        
        y.push(j + 1)
      }

    }
  }
  return y
}