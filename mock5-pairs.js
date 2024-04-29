function pairs(k, arr) {
  // Write your code here
  let numberOfPairs = 0;
  let sorted = arr.sort((a, b) => a - b);
  
    for(let i=0; i < sorted.length; i++) {
        for(let j= i + 1; j < sorted.length; j++) {
          let difference = sorted[j] - sorted[i]
            if(difference === k) {
               numberOfPairs++;
               break
            } if(difference > k) {
              break
            }
        } 
    }
   return numberOfPairs;
}