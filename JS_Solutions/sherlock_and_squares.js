function squares(a, b) {
  // Write your code here
  let start = Math.ceil(Math.sqrt(a))
  let end = Math.floor(Math.sqrt(b))
  console.log({start,end})
  return (end - start + 1)
  // let numberSquareRoots = 0

  // for (let i = a; i <= b; i++) {
  //   // let square = Math.sqrt(i) % 1 === 0
  //   if (Math.sqrt(i) % 1 === 0) {
  //     numberSquareRoots++
  //   } else {
  //     continue
  //   }
  // }
  // return numberSquareRoots

}