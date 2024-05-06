/**
 * Determines if it's possible to organize containers according to certain rules.
 * @param {number[][]} container - An array of arrays representing the containers and the balls they contain.
 * @returns {string} - Returns "Possible" if organizing the containers is possible, otherwise "Impossible".
 */
function organizingContainers(container) {
  // Get the number of containers
  const n = container.length;
  
  // Arrays to store the total capacities of containers and total number of balls of each type
  const containerCapacity = new Array(n).fill(0); // Initialize an array to store the total capacities of containers, setting all values to 0
  const ballCount = new Array(n).fill(0); // Initialize an array to store the total number of balls of each type, setting all values to 0
  
  // Calculate the total capacities of containers and total number of balls of each type
  for (let i = 0; i < n; i++) { // Loop through each container
    for (let j = 0; j < n; j++) { // Loop through each ball in the container
      containerCapacity[i] += container[i][j]; // Add the number of balls in the container to its total capacity
      ballCount[j] += container[i][j]; // Add the number of balls of each type to the total count of that type
    }
  }
  
  // Sort both arrays
  containerCapacity.sort((a, b) => a - b); // Sort the array of container capacities in ascending order
  ballCount.sort((a, b) => a - b); // Sort the array of ball counts in ascending order
  
  // If both arrays are equal, it's possible to organize the containers
  for (let i = 0; i < n; i++) { // Loop through each container
    if (containerCapacity[i] !== ballCount[i]) { // Check if the container's capacity matches the total count of balls of each type
      return "Impossible"; // If not, it's impossible to organize the containers
    }
  }
  
  return "Possible"; // If all containers can hold the same number of balls of each type, it's possible to organize the containers
}




// function organizingContainers(container) {
//   // Write your code here
//   let totalContainer = new Array(container.length).fill(0)
//   let totalBall = new Array(container.length).fill(0)

//   for (let i = 0; i < container.length; i++) {
//     let thisContainer = container[i]
//     for (let j = 0; j < thisContainer.length; j++) {
//       let temp = thisContainer[j]
//       totalContainer[i] += temp
//       totalBall[j] += temp
//     }
//   }
//   totalContainer.sort((a, b) => a - b)
//   totalBall.sort((a, b) => a - b)
//   for (let i = 0; i < container.length; i++) {
//     if (totalContainer[i] !== totalBall[i]) { return "Impossible" }
//     // else return "Possible"
//   }
//   return "Possible"
// }