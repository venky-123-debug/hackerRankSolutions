/**
 * Calculates the ranks of players based on their scores compared to a leaderboard.
 * @param {number[]} ranked - An array representing the scores on the leaderboard in descending order.
 * @param {number[]} player - An array representing the scores of players in ascending order.
 * @returns {number[]} An array containing the ranks of each player.
 */
function climbingLeaderboard(ranked, player) {
  // Remove duplicate scores and sort the leaderboard in ascending order
  ranked = Array.from(new Set(ranked)).sort((a, b) => a - b);
  
  // Initialize variables
  let i = 0;
  let n = ranked.length;
  let results = [];

  // Iterate through each player's score
  player.forEach((score) => {
    // Binary search for the appropriate rank
    while (i < n && ranked[i] <= score) {
      i = i + 1;
    }
    // Calculate and push the rank to the results array
    results.push(n - i + 1);
  });

  // Return the array containing the ranks of each player
  return results;
}



let ranked = [100, 100, 50 ,40 ,40, 20 ,10]

let player = [5, 25, 50, 120]

console.log(climbingLeaderboard(ranked, player));