// let matrix = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let matrix = [
  [112, 42, 83, 119],
  [56, 125, 56, 49],
  [15, 78, 101, 43],
  [62, 98, 114, 108],
];

const flippingMatrix = (a) => {
  try {
    let finalLength = a.length - 1;
    let n = a.length / 2;
    let maxSum = 0;
    let arrMirrorNo = [];
    // console.log({ n });
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        let topLeft = a[i][j];
        // console.log({ topLeft });
        let topRight = a[finalLength - i][j];
        // console.log({ topRight });
        let bottomLeft = a[i][finalLength - j];
        // console.log({ bottomLeft });
        let bottomRight = a[finalLength - i][finalLength - j];
        // console.log({ bottomRight });
        arrMirrorNo.push([topLeft, topRight, bottomLeft, bottomRight]);

        

        //for len=9, n=4.5
        // maxSum += Math.max(
        //   a[i][j], //[0][0]
        //   a[i][2 * n - 1 - j], //[0][2*4.5-1-0]==[0][8]
        //   a[2 * n - 1 - i][j], //a[8][0]
        //   a[2 * n - 1 - i][2 * n - 1 - j] //a[8][8]
        // );
      }
    }
    console.log({arrMirrorNo})
    maxSum = arrMirrorNo.reduce((acc, el) => {
      console.log({ el });
      let maxVal = Math.max(...el);
      console.log({ maxVal });
      return acc + maxVal;
    }, 0);
    
    console.log({ maxSum });
    return maxSum;

    // console.log({ arrMirrorNo });
    // console.log({ maxSum });
    // return maxSum
  } catch (error) {
    console.error(error);
  }
};
flippingMatrix(matrix);
