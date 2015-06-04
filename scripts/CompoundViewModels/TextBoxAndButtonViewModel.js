// Requirements:
//  knockout, BaseElement, TextBoxViewModel, ButtonViewModel
// Conditional requirement: 
//  knockout.enterkey.js - needed if the html control this bind to is not inside a form and you
//                         want the enter key to work when the textbox has focus

var TextBoxAndButtonViewModel = function(text, buttonText, clickMethod, placeholder, autoEnableAfterOnClick, child) {
  var _self = this;
  var _text = text;
  var _buttonText = buttonText;
  var _clickMethod = clickMethod;
  var _child = child;
  var _placeholder = placeholder;
  var _autoEnableAfterOnClick = autoEnableAfterOnClick;

  _self.init = function(obj) {  
    obj.textBoxViewModel = _self.textBoxViewModel || new TextBoxViewModel(_text, _placeholder, _clickMethod);
    obj.canClick = _self.canClick || ko.computed(function() { return !textBoxViewModel.isEmpty(); });
    obj.buttonViewModel = _self.buttonViewModel || new ButtonViewModel(_buttonText, _clickMethod, obj.canClick, _autoEnableAfterOnClick);
  };
  
  _self.init(_self); 
  if (_child) { _self.init(_child); } 
};