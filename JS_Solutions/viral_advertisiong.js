function viralAdvertising(n) {
  // Write your code here
  let totalLikes = 0;
  let likes = 0;
  let received = 5;
  for (var i = 0; i < n; i++) {
    likes = Math.floor(received / 2);
    received = 3 * likes;
    totalLikes += likes;
    console.log({received,likes,totalLikes})
  }
  return totalLikes
}