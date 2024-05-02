function designerPdfViewer(h, word) {
  // Write your code here
  let wordHeight = []
  let maxVal = 0
  for (let i = 0; i < word.length; i++) {
    console.log(h[getIndex(word[i])])
    wordHeight.push(h[getIndex(word[i])]);
  }

  maxVal = Math.max(...wordHeight)
  return (word.length * maxVal)

}

function getIndex(char) {
  let alphabet = ['a', 'b', 'c', 'd', 'e',
    'f', 'g', 'h', 'i', 'j',
    'k', 'l', 'm', 'n', 'o',
    'p', 'q', 'r', 's', 't',
    'u', 'v', 'w', 'x', 'y',
    'z']

  return alphabet.indexOf(char)
}

let h = [1 ,3, 1, 3, 1, 4 ,1 ,3, 2 ,5, 5, 5, 5, 5, 5 ,5 ,5, 5, 5, 5 ,5, 5 ,5, 5, 5, 5]
let word = "abc"
console.log(designerPdfViewer(h, word))