Array.prototype.myUniq = function() {
  var uniq = [];
  for (var i = 0 ; i < this.length -1 ;i++) {
    if (uniq.indexOf(this[i]) === -1) {
      uniq.push(this[i]);
    }
  }
  return uniq;
};

Array.prototype.twoSum = function() {
  var twoSum = [];
  for ( var i = 0; i < this.length - 1; i++) {
    for( var j = i+1; j < this.length; j++) {
      if (this[i] + this[j] === 0) {
        twoSum.push([i, j]);
      }
    }
  }
  return twoSum;
};

Array.prototype.transpose = function() {
  var transposed = [];
  for (var i = 0; i < this.length; i ++) {
    var row = [];
    for (var j = 0; j < this[i].length ; j ++) {
      row.push(this[j][i]);
    }
    transposed.push(row);
  }
  return transposed;
};
