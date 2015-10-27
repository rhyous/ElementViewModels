// Requirements:
//  knockout, BaseElement, TextBoxModel, TextBoxViewModel, ButtonModel, ButtonViewModel
// Conditional requirement:
//  knockout.enterkey.js - needed if the html control this bind to is not inside a form and you
//                         want the enter key to work when the textbox has focus
//  knockout.placeholder.js - needed if you want to bind the placeholder with easy syntax

var TextBoxAndButtonViewModel = TextBoxAndButtonViewModel || function (textBoxModel, buttonModel, customValidationMethod, child) {
	var _self = this;
	var _textBoxModel = textBoxModel;
	var _buttonModel = buttonModel;
	var _customValidationMethod = customValidationMethod;
	var _child = child;

	_self.init = function (obj) {
		obj.textBox = _self.textBoxViewModel || new TextBoxViewModel(_textBoxModel);
		_buttonModel.canClickMethod = function () {
		    return !obj.textBox.isEmpty() && (!_customValidationMethod || _customValidationMethod(obj));
		};
		obj.canClick = _self.canClick || ko.computed(function () {
				return !_buttonModel.canClickMethod();
			});
		obj.button = _self.buttonViewModel || new ButtonViewModel(_buttonModel);
	};

	_self.init(_self);
	if (_child) {
		_self.init(_child);
	}
};