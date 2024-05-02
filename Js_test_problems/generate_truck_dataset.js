const getRandomFloat = (min, max) => {
  return Math.random() * (max - min) + min
}

const generateArrayOfObjects = (numObjects) => {
  const objects = []

  for (let i = 0; i < numObjects; i++) {
    const object = {
      cost: Math.floor(generateCost()),
      volume: getRandomFloat(0.1, 1),
      distance: getRandomFloat(1, 1000)
    }
    objects.push(object)
  }

  return objects
}

const generateCost = () =>{
  let randomValue = Math.random()
  let cost

  if (randomValue < 0.5) {
    cost = getRandomFloat(1, 10) * 0.5
  } else if (randomValue < 0.8) {
    cost = getRandomFloat(10, 50) * 0.3
  } else if (randomValue < 0.95) {
    cost = getRandomFloat(50, 90) * 0.15
  } else {
    cost = getRandomFloat(90, 100) * 0.05
  }

  return cost
}

const arrayOfObjects = generateArrayOfObjects(10)
console.log(arrayOfObjects)
