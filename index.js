const result = (collection) => {
    return (collection instanceof Array) ? collection.slice() : Object.values(collection);
  }
  
function myEach(collection, alert) {
    const newCollection = result(collection);
    for (let i = 0; i< newCollection.length; i++) {
      alert(newCollection[i]);
    }
  
    return collection;
  }

function myMap (collection, alert) {
    const newCollection = result(collection);
    const newArray = [];
    for (let i = 0; i < newCollection.length; i++) {
      newArray.push(alert(newCollection[i]));
    }
  
    return newArray;
  }

function myReduce (collection, callback, acc) {
    let newCollection = result(collection);
    if (!acc) {
      acc = newCollection[0];
      newCollection = newCollection.slice(1);
    }
  
    const len = newCollection.length;
  
    for (let i = 0; i < len; i++) {
      acc = callback(acc, newCollection[i], newCollection);
    }
    return acc;
  }
  
function myFind (collection, predicate) {
    const newCollection = result(collection);
  
    for (let i = 0; i < newCollection.length; i++) {
      if (predicate(newCollection[i])) return newCollection[i];
    }
  
    return undefined;
  }
  
  const myFilter = function(collection, predicate) {
    const newCollection = result(collection);
  
    const newArr = [];
  
    for (let i = 0; i < newCollection.length; i++) {
      if (predicate(newCollection[i])) newArr.push(newCollection[i]);
    }
  
    return newArr;
  }
  
function mySize (collection) {
    const newCollection = result(collection);
    return newCollection.length;
  }
  

  
function myFirst (arr, stop=false) {
    return (stop) ? arr.slice(0, stop) : arr[0];
  }

  
function myLast(arr, start=false) {
    return (start) ? arr.slice(arr.length-start, arr.length) : arr[arr.length-1];
  }

  
function mySortBy(arr, callback) {
    const newArr = [...arr];
    return newArr.sort(function(a, b) {
      if (callback(a) > callback(b)) {
        return 1;
      } else if (callback(b) > callback(a)) {
        return -1;
      } else {
        return 0;
      }
    });
  }
  

const unpack = function(receiver, arr) {
  for (let val of arr) {
    receiver.push(val);
  }
}

  
  function myKeys  (obj) {
      const keys = [];
      for (let key in obj){
        keys.push(key);
      }
      return keys;
    }

    
  function myValues (obj) {
      const values = [];
      for (let key in obj){
        values.push(obj[key]);
      }
      return values;
    
    }