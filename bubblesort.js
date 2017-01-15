function swap (val1, val2) {
  return [val1, val2];
}

function bubbleSort (arr) {
  do {
    var swapped = false;
    for (var i = 1; i < arr.length; i++) {
      if (arr[i] < arr[i - 1]) {
        var tempVal = swap(arr[i], arr[i-1]);
        arr.splice(i-1, 2, tempVal[0], tempVal[1]);
        swapped = true;
      }
    }
  } while (swapped === true);

  return arr;
}


console.log(bubbleSort([2, 4, 2, 1, 7, 3]));
