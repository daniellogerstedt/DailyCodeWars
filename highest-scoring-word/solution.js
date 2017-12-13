function high(x){
  let words = x.split(' '), best = 0, word = ''
  for (let i in words) {
    let rt = 0
    for (let j = 0; j < words[i].length; j++) {
      rt += (words[i].charCodeAt(j) - 96)
    }
    if (rt > best) {
      best = rt;
      word = words[i];
    }
  }
  return word;
}
