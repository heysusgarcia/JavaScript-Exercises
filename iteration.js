var bubbleSort = function(array) {
  var swapped = true;
  while (swapped) {
    swapped = false;
    for (var i = 0; i < array.length-1; i++ ) {
      if (array[i] > array[i + 1]) {
        var temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
        swapped = true;
      }
    }
  }
  return array;
};

var subStrings = function(str) {
  var subs = [];
  for (var i = 0; i <= str.length; i++) {
    for (var j = i + 1; j <= str.length; j ++) {
      var sub = str.slice(i, j);
      if(subs.indexOf(sub) === -1){
        subs.push(sub);
      }
    }
  }
  return subs;
};
