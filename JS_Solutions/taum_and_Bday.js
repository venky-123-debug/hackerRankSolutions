function taumBday(b, w, bc, wc, z) {
  // Write your code here
  let minCost = BigInt(0)
  console.log(typeof (minCost))

  b = BigInt(b)
  w = BigInt(w)
  bc = BigInt(bc)
  wc = BigInt(wc)
  z = BigInt(z)
  if (z <= (bc - wc)) {
    minCost = w * wc
    wc = wc + z
    minCost += b * wc
  } else if (z <= (wc - bc)) {
    minCost = b * bc
    bc = bc + z
    minCost += w * bc
  } else {
    minCost = (w * wc) + (b * bc)
  }
  return minCost
}