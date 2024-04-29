class ParkingLot {
  slots = [];

  constructor(parkingSize) {
    this.slots = new Array(parkingSize).fill(null);
  }

  park(carId) {
    console.log(`Parking car: ${carId}`);
    const emptySlotIndex = this.slots.findIndex((slot) => slot === null);

    if (emptySlotIndex === -1) {
      return false;
    }

    this.slots[emptySlotIndex] = carId;
    return true;
  }

  remove(carId) {
    console.log(`Leaving car: ${carId}`);
    const carIndex = this.slots.indexOf(carId);

    if (carIndex === -1) {
      return false;
    }

    this.slots[carIndex] = null;
    return true;
  }

  getSlots() {
    // console.log(`Parking slots: ${this.slots}`);
    // return this.slots;
    for (let i = 0; i < this.slots.length; i++) {
      if (this.slots[i] !== null) {
        console.log(`Parked at slot ${i}: ${this.slots[i]}`);
      } else {
        console.log(`Slot ${i} is empty`);
      }
    }
  }
}
console.log(ParkingLot);

// class ParkingLot {
//   // Add the methods here

//   slots = [];

//   constructor(parkingSize) {
//     this.slots = new Array(parkingSize).fill(null);
//   }

//   park(carId) {
//     console.log(`Parking car: ${carId}`);
//     if (this.slots.every((slot) => slot !== null)) {
//       return false;
//     }

//     for (let i = 0; i <= this.slots.length; i++) {
//       const slot = this.slots[i];

//       if (slot === null) {
//         this.slots[i] = carId;
//         return true;
//       }
//     }
//   }

//   remove(carId) {
//     console.log(`Leaving car: ${carId}`);
//     if (this.slots.every((slot) => slot !== carId)) {
//       return false;
//     }

//     for (let i = 0; i <= this.slots.length; i++) {
//       const slot = this.slots[i];

//       if (slot === carId) {
//         this.slots[i] = null;
//         return true;
//       }
//     }
//   }

//   getSlots() {
//     console.log(`Parking slots: ${this.slots}`);
//     return this.slots;
//   }

//   getSize() {
//     console.log(`Parking size is: ${this.slots.length}`);
//     return this.slots.length;
//   }

//   getAvailable() {
//     const availableSlots = this.slots.filter((s) => s === null).length;
//     console.log(`Available parking slots: ${availableSlots}`);
//     return availableSlots;
//   }

//   isFull() {
//     return this.getAvailable() === 0;
//   }
// }
