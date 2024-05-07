function howManyGames(p, d, m, s) {
  // Return the number of games you can buy
  let games = 0
  while (s >= p) {
    s -= p
    games++
    p = Math.max(p - d, m)
    console.log({s,p})
  }
  return games
}