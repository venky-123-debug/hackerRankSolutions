const gst = (array, truckCapacity) => {
  array.sort((a, b) => b.volume - a.volume);
  let trucks = [];
  for(let i=0;i<array.length;i++) {
    let truckFound = false;
    for (const truck of trucks) {
      if (truck.totalVolume + array[i].volume <= truckCapacity) {
        truck.items.push(array[i].name);
        truck.totalVolume += array[i].volume;
        truckFound = true;
        break;
      }
    }
    if (!truckFound && array[i].volume <= truckCapacity) {
      trucks.push({ items: [array[i].name], totalVolume: array[i].volume });
    }
  }

  trucks.forEach((truck, index) => {
    console.log(`Truck ${index + 1}: ${truck.items.join(", ")} - Total Volume: ${truck.totalVolume}`);
  });

  console.log(`Total Trucks Needed: ${trucks.length}`);
}


let array1 = [
  {
    cost: 23.5,
    volume: 20,
    distance: 786,
  },
  {
    cost: 7.2,
    volume: 0.25,
    distance: 312,
  },
  {
    cost: 63,
    volume: 0.89,
    distance: 598,
  },
  {
    cost: 44.1,
    volume: 0.42,
    distance: 907,
  },
  {
    cost: 2.8,
    volume: 0.12,
    distance: 159,
  },
  {
    cost: 15.3,
    volume: 0.74,
    distance: 423,
  },
  {
    cost: 71.5,
    volume: 0.36,
    distance: 721,
  },
  {
    cost: 34.8,
    volume: 0.53,
    distance: 872,
  },
  {
    cost: 5.7,
    volume: 0.95,
    distance: 247,
  },
  {
    cost: 93.5,
    volume: 0.21,
    distance: 630,
  },
];
let array2 = [
  { name: "Laptop", price: 5, volume: 30 },
  { name: "Tablet", price: 3, volume: 40 },
  { name: "Microwave", price: 2, volume: 40 },
  { name: "Coffee Maker", price: 2, volume: 50 },
  { name: "Keyboard", price: 20, volume: 30 },
  { name: "Monitor", price: 50, volume: 51 },
  { name: "Printer", price: 30, volume: 32 },
  { name: "Smartphone", price: 40, volume: 24 },
  { name: "Blender", price: 90, volume: 80 },
  { name: "Headphones", price: 60, volume: 25 },
];

let truckCapacity = 10;
gst(array1, truckCapacity);
