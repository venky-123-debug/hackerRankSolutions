function timeToFinishBuyingmeals(meals, k) {
  let queue = [];
  let totalTime = 0;

  for (let i = 0; i < meals.length; i++) {
      queue.push([i, meals[i]]);
      // console.log({queue});
  }

  while (queue.length > 0) {
      let [personIndex, remainingItems] = queue.shift();

      // console.log({remainingItems});
      let itemsOrdered = Math.min(remainingItems, 1); 

      totalTime += itemsOrdered;
      remainingItems -= itemsOrdered;

      console.log({totalTime,remainingItems,personIndex,itemsOrdered});

      if (remainingItems > 0) {
          queue.push([personIndex, remainingItems]);
      } else if (personIndex === k) { 
          return totalTime;
      }
  }

  return totalTime;
}



// let meals = [5, 1, 1, 1];
// let k = 0;
let meals = [2, 5, 3, 1, 6]
let k = 2
console.log(timeToFinishBuyingmeals(meals, k))


// const timeToFinishBuyingmeals = (meals, position) => {
//   let totalTime = 0;

//   while (meals[position] !== 0) {
//     let mealsProcessedInThisRound = 0;
//     for (let i = 0; i < meals.length; i++) {
//       if (meals[i] > 0) {
//         meals[i]--;
//         mealsProcessedInThisRound++;
//       }
//       if (meals[position] === 0) break;
//     }
//     totalTime += mealsProcessedInThisRound;
//   }

//   return totalTime;
// };
