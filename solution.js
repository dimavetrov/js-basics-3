function range(start, end, step) {
  // Write a range function that takes two arguments, start and end,
  // and returns an array containing all the numbers from start up to (and including) end.
 var arr = [];
 if(!step){
  step = 1;
 }
  if(step < 0 && start > end){
   for (var i = start; i > end; i += step)      
    arr.push(i);
  }

if (step > 0 ) {
   for (var i = start; i < end; i += step)
     arr.push(i);
 }
 return arr;
}

function sum(numbers) {
  // Write a sum function that takes an array of numbers
  // and returns the sum of these numbers.
  var summ = 0;
  for(var i=0; i<numbers.length; i++){
    summ += numbers[i];
  }
  return summ;
}

function reverseArray(arr) {
  // Write a function which takes an array as argument
  // and produces a new array that has the same elements in the inverse order.
  var arr2 = [];
  for(var i=0;i<arr.length;i++){
  arr2.push(arr[i]);
}
  arr2.reverse();
  return arr2;
}

function reverseArrayInPlace(arr) {
  // Write a function that does what the reverse method does:
  // it modifies the array given as argument in order to reverse
  // its elements. It should not use the standard reverse method.
  var size = arr.length-1;
  var temp = 0;
  for(var i=0;i<size/2; i++){ 
    temp = arr[i];
    arr[i] = arr[size-i];
    arr[size-i] = temp;
}
return arr;
}

function arrayToList(arr) {
  // Objects, as generic blobs of values, can be used to build all
  // sorts of data structures. A common data structure is the list
  // (not to be confused with the array). A list is a nested set of
  // objects, with the first object holding a reference to the second,
  // the second to the third, and so on.
  // For example:
  //
  // var list = {
  //   value: 1,
  //   rest: {
  //     value: 2,
  //     rest: {
  //       value: 3,
  //       rest: null
  //     }
  //   }
  // };
  //
    
  // Write a function arrayToList that builds up a data structure like
  // the previous one when given [1, 2, 3] as argument. It should use
  // helper function prepend.
    var size = arr.length;
    size = size-1;
    var spisok = null;
    while (size>=0){
      spisok = prepend(arr[size--],spisok);
   }
    return spisok;
}

function listToArray(list) {
  var mass = [];
  while(list>0){
    mass.push(list.value);
    list = list.rest;
  }
return mass;
  // Write a function that produces an array from a list
  }

function prepend(item, list) {
  // Write a function which takes an element and a list and creates a new list
  // that adds the element to the front of the input list.
   return { value : item, rest: list};
}

function nth(n, list) {
  // Write which takes a list and a number and returns the element at the
  // given position in the list, or undefined when there is no such element.
  // It should be recursive.

  if(n == 0){
    return list.value;
   } 
    if(list.rest == null){
      return undefined;
   }else{
     return nth(n-1,list.rest);
  }
}

function deepEqual(a, b) {
  // The == operator compares objects by identity. But sometimes,
  // you would prefer to compare the values of their actual properties.
  //
  // Write a function, deepEqual, that takes two values and returns true
  // only if they are the same value or are objects with the same
  // properties whose values are also equal when compared with
  // a recursive call to deepEqual.
  var property1str = 0;
 var property2str = 0;
 var property1 = 0;
 var property2 = 0;
 if(a != 'object' && b!= "object" || a == null && b == null){
  if(a ==b){
    return true;
  } else {
  return false;
}
 } if(a == 'object' && b == 'object'){
    for(property1 in a){
      property1str++;
    }
    for(property2 in b){
      property2str++;
    }
    if(property1str !=property2str){
      return false;
    }else{
      for(property2 in a){
        if(property1 in b){
          return deepEqual(a[property1],b[property2]);
        }else{
          return false;
        }
      }
    }
 }else{
      return false;
    }   
}

module.exports = {
  range: range,
  sum: sum,
  reverseArray: reverseArray,
  reverseArrayInPlace: reverseArrayInPlace,
  arrayToList: arrayToList,
  listToArray: listToArray,
  prepend: prepend,
  nth: nth,
  deepEqual: deepEqual
}
