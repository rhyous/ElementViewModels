// Requirements:
//  knockout, BaseElement, TextBoxModel, TextAreaModel, TextBoxViewModel, TextAreaViewModel, ButtonModel, ButtonViewModel
//  TextAreaAndButtonViewModel, OptionViewModel, SelectViewModel
// Conditional requirement:
//  knockout.enterkey.js - needed if the html control this bind to is not inside a form and you
//                         want the enter key to work when the textbox has focus
//  knockout.areaRowsColumns.js - needed if you want to bind rows and columns.
//  knockout.placeholder.js - needed if you want to bind the placeholder with easy syntax

var TextAreaSelectAndButtonViewModel = TextAreaSelectAndButtonViewModel || function (textAreaModel, buttonModel, optionViewModelArray, child) {
	var _self = this;
	var _textAreaModel = textAreaModel;
	var _buttonModel = buttonModel;
	var _optionViewModelArray = optionViewModelArray;
	var _child = child;
	_self.base = new TextAreaAndButtonViewModel(_textAreaModel, _buttonModel, _self);

	_self.init = function (obj) {
        obj.select = _self.SelectViewModel || new SelectViewModel(optionViewModelArray);
	};

	_self.init(_self);
	if (_child) {
		_self.init(_child);
	}
};