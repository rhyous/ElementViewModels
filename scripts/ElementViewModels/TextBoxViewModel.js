var TextBoxViewModel = function(text, placeholder, onEnterKeyPressed, child) {
  // Private
  var _self = this;
  var _text = text;
  var _child = child;
  var _onEnterKeyPressed = (onEnterKeyPressed) ? onEnterKeyPressed : function() {
    return true;
  };  
  _self.base = new BaseTextElement(_text, _self);
  
  _self.init = function(obj, isChild) {
    if (isChild) { _self.base.init(obj); }
    
    // Public
    obj.placeholder = _self.placeholder || ko.observable(placeholder);
    obj.onEnterKeyPressed = _onEnterKeyPressed;
    obj.hasFocus = _self.hasFocus || ko.observable(false);
    obj.isEmpty = _self.isEmpty || ko.computed(function() {
      return !obj.text() || obj.text().replace(/\s/g, "").length < 1;
    });
  };

  _self.init(_self);
  if (child) {
    _self.init(child, true);
  }
};