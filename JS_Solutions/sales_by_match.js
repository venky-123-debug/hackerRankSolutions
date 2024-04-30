/**
 * Counts the number of pairs of socks with matching colors.
 * @param {number} n - The number of socks in the pile.
 * @param {number[]} ar - An array of integers representing the colors of each sock.
 * @returns {number} - The number of pairs of socks.
 */
function sockMerchant(n, ar) {
  // Initialize an empty object to store the count of each color of socks
  let colors = {}
  // Initialize a variable to store the total number of pairs of socks
  let pairs = 0

  // Loop through the array of socks to populate the 'colors' object
  ar.forEach((x) => (colors[x] = 0))
  // console.log({ar})

  // Iterate through each unique color of socks
  for (let color in colors) {
    // Count the occurrences of the current color in the 'ar' array
    ar.forEach((x) => x === parseInt(color) && colors[color]++)
    // Calculate the number of pairs of socks of the current color and add it to the total pairs
    pairs += Math.floor(colors[color] / 2)
  }
  console.log({ pairs })
  // Return the total number of pairs of socks
  return pairs
}

let ar = [10, 20, 20, 10, 10, 30, 50, 10, 20];
sockMerchant(ar);
