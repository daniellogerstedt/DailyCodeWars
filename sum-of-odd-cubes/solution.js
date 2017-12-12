function cubeOdd(arr) {
  for (let i in arr) {
    if (!Number.isInteger(arr[i])) return undefined
  }
  let odds = arr.filter(v => v%2!=0)
  if (odds.length === 0) return 0
  return odds.map(v=>v*v*v).reduce((a,c)=>a+c)
}
