function stray(numbers) {
var sort = numbers.sort();
if (sort[0] === sort[1]) {
  return sort[sort.length-1]
}  else {
  return sort[0]
}

}
