let n = 3; // Number of different sizes
let m = 4; // Width of the wall

function legoBlocks(n, m) {
  // Define the modulo value as BigInt
  let mod = BigInt(Math.pow(10, 9) + 7);

  // Initialize arrays to store results for one floor, dirty multi-floor, and clean multi-floor
  let oneFloor = [];
  let floorWithHole = [];
  let cleanMultiFloor = [];

  // Define the number of combinations for building a single floor for each width
  oneFloor = [0n, 1n, 2n, 4n, 8n];

  // Iterate through each width
  for (let width = 1; width <= m; width++) {
    // Calculate number of combinations for width > 4
    console.log({width})
    if (width > 4) {
      console.log("enters if");
      // Update number of combinations using previous values
      console.log(oneFloor[width])
      oneFloor[width] =
        (oneFloor[width - 1] +
          oneFloor[width - 2] +
          oneFloor[width - 3] +
          oneFloor[width - 4]) %
        mod;
      console.log("oneFloor[width] ", (oneFloor[width]))
    }


    // Calculate floorWithHole for each width
    floorWithHole[width] = 1n;
    console.log({width},{floorWithHole})

    for (let k = 0; k < n; k++) {
      console.log({k})
      // Multiply number of combinations for the current width 'n' times
      floorWithHole[width] *= oneFloor[width];
      console.log("floorWithHole[width]",floorWithHole[width])
      console.log("oneFloor[width]",oneFloor[width])
      // Apply modulo operation to prevent overflow
      floorWithHole[width] %= mod;
    }
    console.log({floorWithHole})
  }

  // Calculate cleanMultiFloor for each width
  for (let width = 1; width <= m; width++) {
    cleanMultiFloor[width] = floorWithHole[width] + mod;
    for (let k = 1; k < width; k++) {
      // Calculate clean multi-floor by subtracting each dirty multi-floor multiplied by clean multi-floor of remaining width
      cleanMultiFloor[width] -=
        (cleanMultiFloor[k] * floorWithHole[width - k]) % mod;
      // Add mod and take modulo operation to ensure positive result and prevent overflow
      cleanMultiFloor[width] += mod;
    }
  }

  // Return the cleanMultiFloor for the final width, applying modulo
  return cleanMultiFloor[m] % mod;
}


console.log(legoBlocks(n, m))

// function legoBlocks(n, m) {
//   const MOD = BigInt(10 ** 9 + 7);

//   // Step 1
//   let rowCombinations = [BigInt(1), BigInt(1), BigInt(2), BigInt(4)];

//   while (rowCombinations.length <= m) {
//       const nextCombination = rowCombinations.slice(-4).reduce((acc, val) => acc + val, BigInt(0)) % MOD;
//       rowCombinations.push(nextCombination);
//   }

//   // Step 2
//   let total = rowCombinations.map(comb => comb ** BigInt(n) % MOD);

//   // Step 3
//   let unstable = [BigInt(0), BigInt(0)];

//   for (let i = 2; i <= m; i++) {
//       let result = BigInt(0);
//       for (let j = 1; j < i; j++) {
//           const leftPart = (total[j] - unstable[j]) % MOD;
//           const rightPart = total[i - j] % MOD;
//           result += (leftPart * rightPart) % MOD;
//       }
//       unstable.push(result % MOD);
//   }

//   return (total[m] - unstable[m]) % MOD;
// }

