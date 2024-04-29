function isBalanced(s) {
  const stack = [];
  const bracketArray = {
    '(': ')',
    '[': ']',
    '{': '}',
  };

  for (let i = 0; i < s.length; i++) {
    let currentBracket = s[i];

    if (bracketArray[currentBracket]) {
      stack.push(currentBracket);
    } else {
      let topOfStack = stack.pop();

      if (bracketArray[topOfStack] !== currentBracket) {
        return 'NO';
      }
    }
  }

  return stack.length === 0 ? 'YES' : 'NO';
}


// function isBalanced(s) {
//   // Write your code here
//   // console.log({s})
//   let map = {
//     ')': '(',
//     ']': '[',
//     '}': '{',
//   };

//   let stack = [];

//   for (let i = 0; i < s.length; i++) {
//     if (Object.values(map).includes(s[i])) {
//       stack.push(s[i]);
//     } else if (stack[stack.length - 1] === map[s[i]]) {
//       stack.pop();
//     } else {
//       return 'NO';
//     }
//   }

//   return stack.length === 0 ? 'YES' : 'NO';
// }
let s= '{{[[(())]]}}'
isBalanced(s)