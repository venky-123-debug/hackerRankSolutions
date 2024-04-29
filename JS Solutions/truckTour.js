function truckTour(petrolpumps) {
  // Write your code here
  // let totalPetrol = 0;
  let currentPetrol = 0;
  let start = 0;
  for (let i = 0; i < petrolpumps.length; i++) {
    let [petrol, distance] = petrolpumps[i];
    console.log(petrol)
    console.log(distance)
    // totalPetrol += petrol - distance;
    //distance is 1 kmpl so minus from distance
    currentPetrol += petrol - distance;
    console.log({ currentPetrol })
    if (currentPetrol < 0) {
      currentPetrol = 0;
      start = i + 1;
    }
  }
  console.log({ start });
  return start;

}

let petrolpumps = [
  [1, 5],
  [10, 3],
  [3, 4],
];
truckTour(petrolpumps);
