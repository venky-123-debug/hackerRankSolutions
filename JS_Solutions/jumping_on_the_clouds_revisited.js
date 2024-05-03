function jumpingOnClouds(c, k) {
  let energy = 100
  let currentCloud = 0
  let jump

  while (jump !== 0 && energy >= 0) {
    currentCloud === 0 && (jump = 0)
    jump = (jump + k) % c.length
    energy = c[jump] > 0 ?
      energy - 1 - 2 : energy - 1
    currentCloud++
  }
  console.log(energy)
  return energy

  // let energy = 100
  // for (let i = 0; i < c.length; i++) {
  //   let jump = c[i+k] 
  //   if (c[jump] == 0) energy--
  //   if (c[jump] == 1) energy = energy-1 - 2
  // }
  // return energy
}