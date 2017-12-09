//Use map() to double the values in an array

function double(array) {
    return array.map(val=>val*2)
}

//List Filtering

function filter_list(l) {
  return l.filter(val=> {
    if (Number.isInteger(val)) return val>=0
  })
}

//Calculate average

function find_average(array) {
  return array.reduce((a,c)=>a+c)/array.length;
}
