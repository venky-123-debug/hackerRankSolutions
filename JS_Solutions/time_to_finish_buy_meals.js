/**
 * Calculates the time taken for the person at position k to finish buying meals.
 * @param {number[]} meals - An array representing the number of meals each person wants to buy.
 * @param {number} k - The position of the person in the queue (0-indexed).
 * @returns {number} - The time taken for the person at position k to finish buying meals.
 */
const timeToFinishBuyingmeals = (meals, k)=> {
  let totalTime = 0;
  
  while(meals[k] !== 0) {
    let timeForMeals = 0;
    for(let i = 0; i < meals.length; i++) {
      if(meals[i] > 0) {
        meals[i]--;
        timeForMeals++;
      }
      if(meals[k] === 0) break;
    }
    totalTime += timeForMeals;
  }
  
  return totalTime;
};

// Example usage:
const meals = [2,3,2]
// const meals = [2, 5, 3, 1, 6];
const k = 2;


console.log(timeToFinishBuyingmeals(meals, k)); 
