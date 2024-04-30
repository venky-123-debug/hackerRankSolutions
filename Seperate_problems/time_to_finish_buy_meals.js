

const timeToFinishBuyingmeals = (meals, position)=> {
  let totalTime = 0
  
  while(meals[position] !== 0) {
    let mealsProcessedInThisRound = 0
    for(let i = 0; i < meals.length; i++) {
      if(meals[i] > 0) {
        meals[i]--
        mealsProcessedInThisRound++
      }
      if(meals[position] === 0) break
    }
    totalTime += mealsProcessedInThisRound
  }

  return totalTime
}
let meals =[5, 1, 1, 1]
let k = 0

// let meals = [2, 5, 3, 1, 6]
// let k = 2
console.log(timeToFinishBuyingmeals(meals, k))
// console.log(timeToFinishBuyingmeals(meals, k))

