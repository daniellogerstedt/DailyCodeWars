function abbrevName(name){
  let initials = name.toUpperCase().split(' ');
  return `${initials[0][0]}.${initials[1][0]}`
}
