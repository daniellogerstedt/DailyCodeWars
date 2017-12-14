function mutateMyStrings(stringOne, stringTwo){
  let ret = stringOne; stringOne = stringOne.split(''); stringTwo = stringTwo.split('');
  for (let i = 0; i < stringOne.length; i++) {
    if (stringOne[i] != stringTwo[i]) {
      stringOne[i] = stringTwo[i];
      ret = `${ret}\n${stringOne.join('')}`
    }
  }
  console.log(ret)
  return `${ret}\n`
}
