function queensAttack(n, k, r_q, c_q, obstacles) {
  // Write your code here

   let count = 0;
    const obstacleSet = new Set(obstacles.map(([r, c]) => `${r},${c}`));

    // Define the directions
    const dirs = [[-1, 0], [1, 0], [0, -1], [0, 1], [-1, -1], [-1, 1], [1, -1], [1, 1]];

    // Iterate through each direction
    for (const [dr, dc] of dirs) {
        let row = r_q + dr, col = c_q + dc;

        // Keep moving in the current direction until we hit the board boundary or an obstacle
        while (row >= 1 && row <= n && col >= 1 && col <= n && !obstacleSet.has(`${row},${col}`)) {
            count++;
            row += dr;
            col += dc;
        }
    }

    return count;
}

// function queensAttack(n, k, r_q, c_q, obstacles) {
//   // Write your code here
//   // Initialize the count of squares attacked by the queen
//   let numberOfSquares = 0

//   // left = [0, -1]
//   // right = [0, 1]
//   // top  = [1, 0]
//   // bottom  = [-1, 0]
//   // topLeft  = [1, -1]
//   // topRight = [1, 1]
//   // bottomLeft  = [-1, -1]
//   // bottomRight = [-1, 1]
//   // Define eight possible directions a queen can move
//   const directions = [
//     [-1, 0], [1, 0], [0, -1], [0, 1],   // vertical and horizontal
//     [-1, -1], [-1, 1], [1, -1], [1, 1]  // diagonal
//   ];

//   // Calculate the maximum number of squares the queen can attack in each direction
//   for (const [dr, dc] of directions) {
//     let row = r_q + dr;
//     let col = c_q + dc;

//     // Continue moving in the current direction until the edge of the board or an obstacle is reached
//     while (row >= 1 && row <= n && col >= 1 && col <= n) {
//       // Check if the square is an obstacle
//       if (obstacles.some(([r, c]) => r === row && c === col)) {
//         // If it's an obstacle, break the loop
//         break;
//       }
//       // Increment the count of squares attacked by the queen
//       numberOfSquares++;
//       // Move to the next square in the current direction
//       row += dr;
//       col += dc;
//     }
//   }

//   // Return the total number of squares attacked by the queen
//   return numberOfSquares;
// }