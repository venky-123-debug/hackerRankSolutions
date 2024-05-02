function climbingLeaderboard(ranked, player) {
  // Write your code here
  ranked = Array.from(new Set(ranked)).sort((a, b) => a - b)
  console.log({ranked})
  let i = 0
  let n = ranked.length
  let results = []
  player.forEach((score) => {
    console.log({i,n},ranked[i],score,results);
    while (i < n && ranked[i] <= score){ i = i + 1}
    results.push(n - i + 1)
  })
  return results
}


let ranked = [100, 100, 50 ,40 ,40, 20 ,10]

let player = [5, 25, 50, 120]

console.log(climbingLeaderboard(ranked, player));