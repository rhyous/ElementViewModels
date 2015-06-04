var Property = function(value, child) {
  var _self = this;
  var _value = null;
  var _child = child;
  
  _self.init = function(obj, value) {
  
    obj.get = _self.get || function() {
      return _value;
    };
    
    obj.set =  _self.set || function(value) {
      _value = value;
    };
    
    if (value) { obj.set(value); }
    
    obj.hasValue = function() {
      return _backingField !== undefined && _backingField !== null;
    };
  };
  
  _self.init(_self, value);
  if (_child) { _self.init(_child, value); }
}

var StringProperty = function(value) {
  var _self = this;
  _self.base = new Property(value, _self);
  _self.isNullOrWhitespace = function ( str ) {
    return !str || str.replace(/\s/g, '').length < 1;
  };
}
