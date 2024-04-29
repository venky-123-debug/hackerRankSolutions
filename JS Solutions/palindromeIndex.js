let s = "madama";

function palindromeIndex(s) {
  // Write your code here
  // console.log(s);
  // console.log("s.length / 2",s.length / 2)
  // if (s === s.split("").reverse().join("")) return -1
  function isPalindrome(s) {
    for (let i = 0; i < Math.floor(s.length / 2); i++) {
      console.log(s[s.length - i - 1]);
      if (s[i] !== s[s.length - i - 1]) {
        return false;
      }
    }
    return true;
  }

  // let res = -1;

  for (let i = 0; i < Math.floor(s.length / 2); i++) {
    if (s[i] !== s[s.length - i - 1]) {
      // console.log( "s.substring(0, i)",s.substring(0, i))
      // console.log("s.substring(i + 1)",s.substring(i + 1))
      const tmp = s.substring(0, i) + s.substring(i + 1);
      
      console.log({tmp})
      if (isPalindrome(tmp)) {
        return i;
      } else {
        return s.length - i - 1;
      }
    }
  }
  return -1;
}

palindromeIndex(s)