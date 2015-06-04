// Requirements:
//  knockout, BaseElement, TextBoxModel, TextBoxViewModel, ButtonModel, ButtonViewModel
// Conditional requirement: 
//  knockout.enterkey.js - needed if the html control this bind to is not inside a form and you
//                         want the enter key to work when the textbox has focus

var TextBoxAndButtonViewModel = function(textBoxModel, buttonModel, child) {
  var _self = this;
  var _textBoxModel = textBoxModel;
  var _buttonModel = buttonModel;
  var _child = child;

  _self.init = function(obj) { 
    obj.textBoxViewModel = _self.textBoxViewModel || new TextBoxViewModel(_textBoxModel);
    _buttonModel.canClickMethod = function() {
	  return !obj.textBoxViewModel.isEmpty(); 
    };
	obj.canClick = _self.canClick || ko.computed(function() {
		return !_buttonModel.canClickMethod();
	});	
    obj.buttonViewModel = _self.buttonViewModel || new ButtonViewModel(_buttonModel);
  };
  
  _self.init(_self); 
  if (_child) { _self.init(_child); } 
};