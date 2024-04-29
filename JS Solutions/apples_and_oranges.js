function countApplesAndOranges(s, t, a, b, apples, oranges) {
  // Write your code here
  let appleCount = 0;
  let orangeCount = 0;

  for (let i = 0; i < apples.length; i++) {
    apples[i] += a;
    if (apples[i] >= s && apples[i] <= t) {
      appleCount++;
    }
  }

  for (let i = 0; i < oranges.length; i++) {
    oranges[i] += b;
    if (oranges[i] >= s && oranges[i] <= t) {
      orangeCount++;
    }
  }

  console.log(appleCount);
  console.log(orangeCount);
}
