function saveThePrisoner(n, m, s) {
  // Write your code here
  let lastSweetPosition = (s + m - 1) % n;
  if (lastSweetPosition === 0) {
    return n;
  } else {
    return lastSweetPosition;
  }
  // return (m%n+s-1)%n ? (m%n+s-1)%n : n

}