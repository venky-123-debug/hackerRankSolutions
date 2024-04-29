function minTime(files, numCores, limit) {
  let processedTime = 0;
  let remainingLimit = limit;

  for (let i = 0; i < files.length; i++) {
    if (files[i] % numCores === 0 && remainingLimit > 0) {
      processedTime += files[i] / numCores;
      remainingLimit--;
    } else {
      processedTime += files[i];
    }
  }

  return processedTime;
}


// function minTime(files, numCores, limit) {
//   let x = [];
//   let y = [];
  
//   for(let i=0;i<files.length;i++) {
//       if(files[i]%numCores === 0) x.push(files[i])
//       else y.push(files[i])
//   }

//   x.sort((a, b) => b - a);

//   return Math.floor(x.slice(0, limit).reduce((sum, value) => sum + value, 0) / numCores) + x.slice(limit).reduce((sum, value) => sum + value, 0) + y.reduce((sum, value) => sum + value, 0);
// }