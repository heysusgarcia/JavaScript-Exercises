var range = function(start, end) {
  if(end < start){
    return [];
  }
  else{
    var r = range(start, end - 1);
    r.push(end);
    return r;
  }
};

var sumIter = function(array) {
  var sum = 0;
  for (var i = 0; i < array.length; i++ ) {
    sum += array[i];
  }
  return sum;
};

var sumRec = function(array) {
  if (array.length === 0) {
    return 0;
  } else if (array.length === 1) {
    return array[0];
  } else {
    return sumRec(array.slice(1)) + array[0];
  }
};

var exp1 = function(base, exp) {
  if (exp === 0) {
    return 1;
  } else {
    return base * exp1(base, exp - 1);
  }
};

var exp2 = function(base, exp) {
  if(exp === 0){
    return 1;
  }
  else if(exp === 1 ){
    return base;
  }
  else if( exp % 2 === 0){
    var temp = exp2(base, exp / 2);
    return Math.pow( temp, 2 );
  }
  else{
    var temp = exp2(base, (exp-1)/2);
    return base * Math.pow( temp, 2 );
  }
};

var fiboRecur = function(num) {
  if( num === 0){
    return [0];
  }
  else if(num === 2){
    return [0,1];
  }
  else{
    var fibArr = fiboRecur(num-1);
    fibArr.push(fibArr.slice(-1)[0] + fibArr.slice(-2,-1)[0]);
    return fibArr;
  }

};

var fiboIter = function(num) {
  var fibs = [0, 1];
  if( num === 0){
    return [0];
  } else if(num === 2) {
    return fibs;
  } else {
    for(var i = 1 ; i < num - 1; i++) {
      fibs.push(fibs[i - 1 ] + fibs[i]);
    }
  }
  return fibs;
};

var binarySearch = function(array, target) {
  var middle = Math.floor(array.length / 2);
  if (target === array[middle]) {
    return middle;
  } else if (target < array[middle]) {
    return binarySearch(array.slice(0, middle), target);
  } else if (target > array[middle]) {
    var temp = binarySearch(array.slice(middle + 1), target);
    if( temp !== -1){
      return  temp + middle + 1;
    }
    else{
      return -1;
    }
  } else {
    return -1;
  }
};

//pick best from coin combinations
var makeChange = function(value, coins){
  if(value === 0){
    return [];
  }
  else{
    var possibleCombos = coinArrays(value, coins);
    var min = possibleCombos[0];
    for (var i=0; i<possibleCombos.length; i++ ) {
      if (min.length > possibleCombos[i].length) {
        min = possibleCombos[i];
      }
    }
    return min;
  }
};


// return array of possible coin combinations
//[10,7,1] [7,7]
var coinArrays = function(value, coins){
  if (value === 0 || coins.length === 0) {
    return [[]];
  } else if (coins.length === 1) {
      var lastCoin = Math.floor(value / coins[0]);
      var coArray = [];
      for( var i = 0; i < lastCoin; i++){
        coArray.push(coins[0]);
      }
      return [coArray];
  } else {
      var c = coinArrays(value, coins.slice(1)); // array of array of coins
      // console.log(c);
      var largestCoinCount = Math.floor(value / coins[0]);
      // array of array of coins
      var largestCoinRemoved = coinArrays(value - largestCoinCount *
                                            coins[0], coins.slice(1));

    // add this many of largest coin to each largestCoinRemovedArray
    var addLargests = function(cArray){
      for( var i = 0; i < largestCoinCount; i++){
        cArray.push(coins[0]);
      }
      return cArray;
    };
    var largestAdded = largestCoinRemoved.map(addLargests);
    return largestAdded.concat(c);
  }
};

// merge two sorted arrays
var mergeDown = function(left, right) {
  if (left.length === 0 || right.length === 0) {
    return left.concat(right);
  } else {
    var sorted = [];
    while (left.length !== 0 && right.length !== 0) {
      if (left[0] > right[0]) {
       sorted.push(right.shift());
      } else {
        sorted.push(left.shift());
      }
    }
    return sorted.concat(left.concat(right));
  }

};


//splits down the middle
var mergeSort = function(array) {
  if( array.length < 2){
    return array;
  }
  else{
    var middle = Math.floor(array.length/2);
    var left = array.slice(0,middle);
    var right = array.slice(middle);
    var sortedLeft = mergeSort(left);
    var sortedRight = mergeSort(right);
    return mergeDown(sortedLeft, sortedRight);
  }

};

var subsets = function(array) {
  if (array.length === 0) {
    return [[]];
  } else if (array.length === 1) {
    var temp = subsets(array.slice(1));
    temp.push(array);
    return temp;
  } else {
    var previous = subsets(array.slice(0, -1));
    var output = previous.map(function(el) {
      var temp = el.push(array.slice(-1));
      return el;
    });
    return previous.concat(output);
  }
};
