// 1. Given a one dimensional array of data write a function that returns a new array with the data reversed. Don't just use the reverse function that is built into your environment.

let array = ["bob", "mike", "sam", "edwin", "charles", "peach", "mario"];

function reverseArray(arr) {
    var newArray = [];
    for (var i = arr.length - 1; i >= 0; i--) {
      newArray.push(arr[i]);
    }
    return newArray;
}

reverseArray(array);