Array.prototype.multiples = function() {
  for( var i = 0 ; i< this.length; i++){
    this[i] = this[i] * 2;
  }
  return this;
};

Array.prototype.myEach = function(func) {
  for( var i = 0; i < this.length; i++ ){
    func(this[i]);
  }
  return this;
};

// use my each and a closure
Array.prototype.myMap = function(func) {
  var mapped = [];

  this.myEach(function (el) {
    mapped.push(func(el));
  });

  return mapped;
};

Array.prototype.myInject = function(func) {
  var accum = this[0];
  this.slice(1).myEach(function (el) {
    accum = func(accum, el);
  });
  return accum;
};

var add = function(accum, el) {
  return accum + el;
};
