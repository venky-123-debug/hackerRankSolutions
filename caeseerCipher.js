function caesarCipher(s, k) {
  // Write your code here
  let lowerA = "abcdefghijklmnopqrstuvwxyz";
  let upperA = lowerA.toUpperCase();

  // console.log(s.split(''))
  let res = s.split("").map((c) => {
    if (lowerA.includes(c)) {
      // console.log(lowerA[(lowerA.indexOf(c) + k) % 26])
      return lowerA[(lowerA.indexOf(c) + k) % 26];
    } else if (upperA.includes(c)) {
      return upperA[(upperA.indexOf(c) + k) % 26];
    } else {
      return c;
    }
  });

  return res.join("");
}

function caesarCipher(s, k) {
  let shift = k % 26;

  return s
    .split("")
    .map((char) => {
      if (/[a-zA-Z]/.test(char)) {
        let base =
          char === char.toLowerCase() ? "a".charCodeAt(0) : "A".charCodeAt(0);
        let shiftedChar = String.fromCharCode(
          ((char.charCodeAt(0) - base + shift) % 26) + base
        );
        return shiftedChar;
      } else {
        return char;
      }
    })
    .join("");
}
