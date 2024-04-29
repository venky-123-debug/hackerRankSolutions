function kangaroo(x1, v1, x2, v2) {
  if (v2 >= v1) {
    return "NO";
  }
  if (x1 === x2 && v1 === v2) {
    return "YES";
  }
  if ((x2 - x1) % (v1 - v2) === 0) {
    return "YES";
  }
  return "NO";
}

//NOT WORKING
function kangaroo(x1, v1, x2, v2) {
  return x1 === x2 && v1 === v2 && (x2 - x1) % (v1 - v2) === 0 ? "YES" : "NO";
}
