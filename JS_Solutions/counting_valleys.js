function countingValleys(steps, path) {
  // Write your code here
  // console.log({steps},typeof path)
  let currentValley = 0;
  let valleyCount = 0;
  //generating array from the given string
  let pathArray = Array.from(path);
  console.log({ pathArray });
  //loops through the steps array
  for (let i = 0; i <= steps; i++) {
    //count for mountain
    if (pathArray[i] == "U") {
      currentValley++;
    }
    //count for valley
    if (pathArray[i] === "D") {
      currentValley--;
    }
    // final count of the valley to be returned
    if (currentValley == 0 && pathArray[i] === "U") {
      valleyCount++;
    }
  }
  console.log({valleyCount})
  return valleyCount;
}

let steps = 8
let path = "UDDDUDUU"

countingValleys(steps, path)
