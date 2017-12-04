//Alternate Capitalization Solution

function capitalize(s){
  let evens = s.split(''), odds = s.split('')
  for (let i in evens) {
    i%2===0? evens[i] = evens[i].toUpperCase() : odds[i] = odds[i].toUpperCase()
  }
  return [evens.join(''), odds.join('')];
};

//Validate Pin Regex Solution

function validatePIN (pin) {
  return pin.length === 4? /\d{4}/.test(pin) : pin.length === 6? /\d{6}/.test(pin) : false
}
