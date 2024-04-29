function migratoryBirds(arr) {
  let obj = {}, maxCount = 0, result = [];
  for (let i = 0; i < arr.length; i++) {
      if (!obj[arr[i]]) {
          obj[arr[i]] = 1;
      } else {
          obj[arr[i]] += 1;
      }

      if (obj[arr[i]] > maxCount) {
          maxCount = obj[arr[i]];
      }
  }


  for (let j = 0; j < arr.length; j++) {
      if (obj[arr[j]] === maxCount) {
          result.push(arr[j]);
      }
  }

  return Math.min(...result);

}