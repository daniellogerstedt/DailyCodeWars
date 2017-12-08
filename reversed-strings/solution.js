function solution(str){
  str = str.split('')
  return str.slice().map(v=>str.pop()).join('')
}
