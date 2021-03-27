//chocolateBars Array
var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

//addElementToBeginningOfArray is not destructive
function addElementToBeginningOfArray(array,element){
  return [element, ...array]
}

//destructivelyAddElementToBeginningOfArray is destructive
function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element)
  return array
}

//addElementToEndOfArray is not destructive
function addElementToEndOfArray(array, element){
  return [...array, element]
}

//destructivelyAddElementToEndOfArray
function destructivelyAddElementToEndOfArray(array, element){
  array.push(element)
  return array
}

function accessElementInArray(array, index){
  return array[index]
}

function destructivelyRemoveElementFromEndOfArray(array){
  array = array.shift()
  return array
}
