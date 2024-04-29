/**
 * Counts the number of contiguous segments of chocolate squares 
 * whose sum equals Ron's birth day.
 * 
 * @param {number[]} s - An array of integers representing the chocolate squares' numbers.
 * @param {number} d - An integer representing Ron's birth day.
 * @param {number} m - An integer representing Ron's birth month.
 * @returns {number} - The number of contiguous segments whose sum equals Ron's birth day.
 */
function birthday(s, d, m) {
  // Initialize a variable to count the number of segments
  let count = 0;

  // Iterate through the array starting from the first element
  // and continuing until there are enough elements remaining
  // to form a segment of length `m`
  for (let i = 0; i <= s.length - m; i++) {
    // Initialize a variable to store the sum of elements in the current segment
    let sum = 0;
    
    // Iterate through each element within the current segment
    for (let j = i; j < i + m; j++) {
      // Add the value of the current element to the sum
      sum += s[j];
    }
    
    // Check if the sum of the current segment equals Ron's birth day
    if (sum === d) {
      // If so, increment the count of segments
      count++;
    }
  }

  // Return the final count of segments
  return count;
}

function birthday(s, d, m) {
  // Write your code here
  let sum = [0]
  let count = 0

  for (let i = 1; i <= s.length; i++) {
    sum[i] = sum[i - 1] + s[i - 1]
  }
  for (let i = 0; i <= s.length - m; i++) {
    if (sum[i + m] - sum[i] === d) {
      count++
    }
  }
  return count
}
