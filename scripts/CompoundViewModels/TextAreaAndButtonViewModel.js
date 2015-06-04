// Requirements:
//  knockout, BaseElement, TextBoxModel, TextAreaModel, TextBoxViewModel, TextAreaViewModel, ButtonModel, ButtonViewModel
// Conditional requirement:
//  knockout.enterkey.js - needed if the html control this bind to is not inside a form and you
//                         want the enter key to work when the textbox has focus
//  knockout.areaRowsColumns.js - needed if you want to bind rows and columns.
//  knockout.placeholder.js - needed if you want to bind the placeholder with easy syntax

var TextAreaAndButtonViewModel = TextAreaAndButtonViewModel || function (textAreaModel, buttonModel, child) {
	var _self = this;
	var _textAreaModel = textAreaModel;
	var _buttonModel = buttonModel;
	var _child = child;

	_self.init = function (obj) {
		obj.area = _self.textAreaViewModel || new TextAreaViewModel(_textAreaModel);
		_buttonModel.canClickMethod = function () {
			return !obj.area.isEmpty();
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