var integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8]
.sort(function(first, second) { 
  return first - second; })
.reverse()
.filter(function(element, index, array) {
  if (element < 19) {
    return element
  }
})
.map(function(index) {return index * 1.5 - 1})
.reduce(function(previousValue, currentValue, index, array) {
  return previousValue + currentValue;
})

console.log(integers);