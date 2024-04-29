class MinHeap {
  constructor() {
      this.items = []
  }

  getParentIndex(i) {
      return Math.floor((i - 1) / 2)
  }

  getLeftIndex(i) {
      return 2 * i + 1
  }

  getRightIndex(i) {
      return 2 * i + 2
  }

  peek() {
      return this.items[0]
  }

  pop() {
      let val = this.items[0]
      let lastIdx = this.items.length - 1
      this.items[0] = this.items[lastIdx]
      this.items.pop()
      this.bubbleDown()
      return val
  }

  insert(val) {
      this.items.push(val)
      this.bubbleUp()
  }

  bubbleUp() {
      let i = this.items.length - 1
      while (i > 0) {
          let parent = this.getParentIndex(i)
          if (this.items[i] < this.items[parent]) {
              this.swap(i, parent)
              i = parent
          } else {
              break
          }
      }
  }

  bubbleDown() {
      let i = 0
      while (true) {
          let left = this.getLeftIndex(i)
          let right = this.getRightIndex(i)
          let min = i
          if (left < this.items.length && this.items[left] < this.items[min]) {
              min = left
          }
          if (right < this.items.length && this.items[right] < this.items[min]) {
              min = right
          }
          if (min === i) {
              break
          }
          this.swap(i, min)
          i = min
      }
  }

  swap(x, y) {
      [this.items[x], this.items[y]] = [this.items[y], this.items[x]]
  }
}

function cookies(k, A) {
  let heap = new MinHeap()

  for (let sweetness of A) {
      heap.insert(sweetness)
  }

  let operations = 0

  while (heap.peek() < k && heap.items.length > 1) {
      heap.insert(heap.pop() + 2 * heap.pop())
      operations++
  }

  if (heap.peek() < k) {
      operations = -1
  }

  return operations
}



// function cookies(k, A) {
//   A.sort((a, b) => a - b)

//   let operations = 0
//   while (A[0] < k) {
//     let leastSweet = A.shift()
//     let secondLeastSweet = A.shift()
//     let newSweetness = leastSweet + 2 * secondLeastSweet
//     A.push(newSweetness)
//     operations++
//     if (A.length < 2) {
//       return -1
//     }
//     A.sort((a, b) => a - b)
//   }

//   return operations
// }

// function cookies(k, A) {
//   // Write your code here
//   A.sort((a, b) => a - b)

//   let operations = 0
//   for (let i = 0; A[0] < k; i++) {
//     let leastSweet = A.shift()
//     let secondLeastSweet = A.shift()
//     let newSweetness = leastSweet + (2 * secondLeastSweet)
//     A.push(newSweetness)
//     operations++
//     if (A.length < 2) {
//       return -1
//     }
//     A.sort((a, b) => a - b)
//   }

//   return operations
// }
// Example usage
let A = [1, 2, 3, 9, 10, 12]
let k = 7
console.log(cookies(k, A))

