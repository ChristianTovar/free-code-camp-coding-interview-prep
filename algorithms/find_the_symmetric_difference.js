function sym(...args) {
  let ans = args.reduce((acc, val) => symDiff(acc, val))
  return [...ans]
}

function symDiff(A, B) {
  let diff = new Set(A)
  let setB = new Set(B)
  for (let elem of setB) {
      if (diff.has(elem)) {
          diff.delete(elem)
      } else {
          diff.add(elem)
      }
  }
  
  return diff
}
