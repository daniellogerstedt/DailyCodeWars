'use strict'

function insertDash(num) {
  let previous = ''
  let current = ''
  let newstring = ''
  let number = num.toString();
  for (let i in number) {
    parseInt(number[i])%2 === 0? current = 'even' : current = 'odd';
    if (current === 'odd') previous === 'odd'? newstring = `${newstring}-${number[i]}` : newstring = `${newstring}${number[i]}`;
    if (current === 'even') newstring = `${newstring}${number[i]}`
    previous = current;
  }
  return newstring;
}
