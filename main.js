function gooseFilter (birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  //Using filter we test the elements of an array and return a new array with only those elements that passed
  return birds.filter(item => !geese.includes(item));
  
};