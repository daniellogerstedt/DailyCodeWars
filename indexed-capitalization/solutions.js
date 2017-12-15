function capitalize(s,arr){
  s = s.split('');
  for (let i in arr){
    if (s[arr[i]]) s[arr[i]] = s[arr[i]].toUpperCase()
  }
  return s.join('');
}
