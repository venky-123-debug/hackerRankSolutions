function minimumBribes(q) {
  let integer = 0;
  let chaos = false;
  for (let i = q.length - 1; i >= 0; i--) {
    if (q[i] - i > 3) chaos = true;
    for (let j = q[i] - 2; j < i; j++) {
      if (q[j] > q[i]) integer++;
    }
  }
  console.log({ chaos });
  if (chaos) console.log("Too chaotic");
  else console.log(integer);
}

let q = [2,3,1,4,5];
minimumBribes(q);
