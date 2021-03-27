//chocolateBars Array
var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

//addElementToBeginningOfArray is not destructive
function addElementToBeginningOfArray(array,element){
  return [element, ...array]
}

//destructivelyAddElementToBeginningOfArray is destructive
function destructivelyAddElementToBeginningOfArray(array, element){
  var array = [element, ...array]
  return array
}
