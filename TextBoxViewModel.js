var TextBoxViewModel = function(text, placeholder, onEnterKeyPressed, child) {
  // Private
  var _self = this;
  BaseElement(_self);
  var _onEnterKeyPressed = (onEnterKeyPressed) ? onEnterKeyPressed : function() { return true; };
  
  _self.init = function(obj) {
    // Public
    obj.text = ko.observable(text);
    obj.placeholder = ko.observable(placeholder);
    obj.onEnterKeyPressed = _onEnterKeyPressed;
    obj.hasFocus = ko.observable(false);
    obj.isEmpty = ko.computed(function() {
      return !obj.text() || obj.text().replace(/\s/g, "").length < 1;
    });
  };

  _self.init(_self);
  if (child) {  _self.init(child);  }
};
