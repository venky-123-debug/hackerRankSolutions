function formingMagicSquare(s) {
  // Extract the numbers from the matrix s and store them in a 1D array grid
  let grid = [
    s[0][0],
    s[0][1],
    s[0][2],
    s[1][0],
    s[1][1],
    s[1][2],
    s[2][0],
    s[2][1],
    s[2][2],
  ];

  // Define an array to store all possible magic squares
  let magic = [];
  
  // Define each possible magic square and push it into the magic array
  magic.push([2, 9, 4, 7, 5, 3, 6, 1, 8]);
  magic.push([2, 7, 6, 9, 5, 1, 4, 3, 8]);
  magic.push([4, 9, 2, 3, 5, 7, 8, 1, 6]);
  magic.push([4, 3, 8, 9, 5, 1, 2, 7, 6]);
  magic.push([6, 7, 2, 1, 5, 9, 8, 3, 4]);
  magic.push([6, 1, 8, 7, 5, 3, 2, 9, 4]);
  magic.push([8, 1, 6, 3, 5, 7, 4, 9, 2]);
  magic.push([8, 3, 4, 1, 5, 9, 6, 7, 2]);

  // Print the magic array for debugging purposes
  console.log({ magic });

  // Define an array to store the costs of converting grid to each magic square
  let costs = [];
  
  // Iterate over each magic square
  for (let i = 0; i < magic.length; i++) {
    // Initialize totalCost to 0 for each magic square
    let totalCost = 0;
    
    // Iterate over each cell in the grid and calculate the absolute difference between the cell value and the corresponding magic square value
    for (let j = 0; j < grid.length; j++) {
      totalCost += Math.abs(grid[j] - magic[i][j]);
    }
    
    // Push the totalCost for the current magic square into the costs array
    costs.push(totalCost);
  }

  // Return the minimum cost from the costs array using the spread operator and Math.min
  return Math.min(...costs);
}
