function processData(input) {
  const inputArray = input.split('\n');
  const queryCount = parseInt(inputArray[0]);
  const myQueue = new Queue();

  for (let i = 1; i <= queryCount; i++) {
    const [queryType, value] = inputArray[i].trim().split(' ');

    if (queryType === '1') {
      myQueue.enqueue(value);
    } else if (queryType === '2') {
      myQueue.dequeue();
    } else if (queryType === '3') {
      myQueue.front();
    }
  }
}
class Queue {
  constructor() {
    this.s1 = [];
    this.s2 = [];
  }

  queueFromStack() {
    if (this.s2.length === 0 && this.s1.length > 0) {
      // while () {
      for (let i = this.s1.length - 1; i >= 0; i--) {
        this.s2.push(this.s1.pop());
      }
    }
  }

  enqueue(value) {
    this.s1.push(value);
  }

  dequeue() {
    this.queueFromStack();
    this.s2.pop();
  }

  front() {
    this.queueFromStack();
    console.log(this.s2[this.s2.length - 1]);
  }
}


// function processData(input) {
//   //Enter your code here
//   // console.log(typeof input)
//   let inputArray = input.split("\n");
//   // console.log(inputArray)
//   // console.log(typeof inputArray)
//   let query = parseInt(inputArray[0]);
//   // console.log({query})
//   let s1 = [];
//   let s2 = [];

//   function queueFromStack() {
//     if (!s2.length && s1.length) {
//       //because of LIFO of stack
//       for (let i = s1.length - 1; i >= 0; i--) {
//         s2.push(s1[i]);
//         s1.pop();
//       }
//     }
//   }

//   for (let i = 1; i <= query; i++) {
//     let type = inputArray[i].trim().split(" ");
//     // console.log("inputArray[i]",inputArray[i])
//     //enqueue
//     if (type[0] === "1") {
//       s1.push(type[1]);
//       //dequeue
//     } else if (type[0] === "2") {
//       queueFromStack();
//       s2.pop();
//       //peek(print first element)
//     } else if (type[0] === "3") {
//       queueFromStack();
//       console.log(s2[s2.length - 1]);
//     }
//   }
// }

// function processData(input) {
//   let inputArray = input.split('\n');
//   let query = parseInt(inputArray[0]);
//   let inputStack = [];
//   let outputStack = [];

//   function stackToQueue() {
//     if (!outputStack.length) {
//       while (inputStack.length) {
//         outputStack.push(inputStack.pop());
//       }
//     }
//   }

//   for (let i = 1; i <= query; i++) {
//     let entry = inputArray[i].trim().split(' ');

//     switch (entry[0]) {
//       case '1':
//         inputStack.push(entry[1]);
//         break;
//       case '2':
//         stackToQueue();
//         outputStack.pop();
//         break;
//       case '3':
//         stackToQueue();
//         console.log(outputStack[outputStack.length - 1]);
//         break;
//       default:
//         break;
//     }
//   }
// }
