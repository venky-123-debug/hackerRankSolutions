function timeToFinishBuyingmeals(meals, k) {
  let n = meals.length
  let time = 0
  let currentPosition = 0

  while (meals[k] > 0) {
    for (let i = 0; i < n&&meals[k] > 0 ; i++) {
      console.log("meals[k]",meals[k])
      if (meals[i] > 0) {
        time++
        meals[i]--
      }
    }
    let firstPerson = meals.shift()
    console.log({firstPerson})
    meals.push(firstPerson)
    currentPosition = (currentPosition + 1) % n
    console.log({ currentPosition })
  }

  return time
}

// let meals = [2,3,2]
let meals = [2, 5, 3, 1, 6];
let k = 2;
console.log(timeToFinishBuyingmeals(meals, k));

// const timeToFinishBuyingmeals = (tickets, targetPosition)=> {
//   let totalTime = 0;

//   while(tickets[targetPosition] !== 0) {
//     let ticketsProcessedInThisRound = 0;
//     for(let currentPosition = 0; currentPosition < tickets.length; currentPosition++) {
//       if(tickets[currentPosition] > 0) {
//         tickets[currentPosition]--;
//         ticketsProcessedInThisRound++;
//       }
//       if(tickets[targetPosition] === 0) break;
//     }
//     totalTime += ticketsProcessedInThisRound;
//   }

//   return totalTime;
// };
