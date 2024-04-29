/**
 * Finds the type of bird with the highest frequency of sightings.
 * In case of a tie, returns the type with the lowest ID number.
 * @param {number[]} arr - An array containing IDs of bird sightings.
 * @returns {number} - The ID of the most frequently sighted bird type.
 */
function migratoryBirds(arr) {
  // Initialize an empty object to store bird IDs and their frequencies
  let obj = {}
  // Initialize variables to store the maximum frequency and the resulting bird ID(s)
  let maxCount = 0
  let result = []

  // Iterate through the array of bird sightings
  for (let i = 0; i < arr.length; i++) {
    // If the bird ID is not yet in the object, initialize its count to 1
    if (!obj[arr[i]]) {
      obj[arr[i]] = 1;
    } else {
      // If the bird ID is already in the object, increment its count
      obj[arr[i]] += 1;
    }

    // Update the maximum count if the current bird's count is higher
    if (obj[arr[i]] > maxCount) {
      maxCount = obj[arr[i]];
    }
  }

  // Iterate through the object to find bird IDs with the maximum count
  for (let j = 0; j < arr.length; j++) {
    if (obj[arr[j]] === maxCount) {
      // Push bird IDs with the maximum count to the result array
      result.push(arr[j])
    }
  }

  // Return the minimum ID of the birds with the maximum count
  return Math.min(...result)
}
