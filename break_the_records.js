function breakingRecords(scores) {
  // Write your code here
  let best = 0
  let worst = 0
  let bestScore = scores[0]
  let worstScore = scores[0]
  for (let i = 1; i < scores.length; i++) {
      if (scores[i] > bestScore) {
          bestScore = scores[i]
          best++
      }
      if (scores[i] < worstScore) {
          worstScore = scores[i]
          worst++
      }
  }
  return [best, worst]
}