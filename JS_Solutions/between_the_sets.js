function getTotalX(a, b) {
  // Write your code here
  
  // Sort arrays 'a' and 'b' in ascending order
  a.sort((a, b) => a - b)
  b.sort((a, b) => a - b)
  
  // Initialize an empty array to store the solution
  let sol = []
  
  // Initialize the factor to the largest number in array 'a'
  let factor = a[a.length - 1]
  
  // Iterate infinitely until a break condition is met
  while (true) {
    // Initialize a flag to track whether the current factor satisfies the conditions
    let flag = true
    
    // Iterate over each element in array 'a'
    for (let i = 0; i < a.length; i++) {
      // Log the current factor to the console for debugging purposes
      
      // Check if the current factor is divisible by the current element of array 'a'
      if (factor % a[i] !== 0) {
        // If not, set the flag to false and break out of the loop
        flag = false
        break
      }
      
      // Check if all elements of array 'b' are divisible by the current factor
      if (b.filter(num => num % factor === 0).length !== b.length) {
        // If not, set the flag to false and break out of the loop
        flag = false
        break
      }
    }
    
    // If the flag is still true, push the current factor to the solution array
    if (flag) sol.push(factor)
    
    // Increment the factor by the largest number in array 'a'
    factor += a[a.length - 1]
    console.log({factor},a[a.length - 1])
    
    // Check if the factor exceeds the smallest number in array 'b'
    if (factor > b[0]) break
  }
  
  // Return the length of the solution array
  return sol.length

}

let a=[ 2, 4 ], b= [ 16, 32, 96 ] 
getTotalX(a, b)