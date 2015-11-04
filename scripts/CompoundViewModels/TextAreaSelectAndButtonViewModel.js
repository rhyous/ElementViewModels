// Requirements:
//  knockout, BaseElement, TextBoxModel, TextAreaModel, TextBoxViewModel, TextAreaViewModel, ButtonModel, ButtonViewModel
//  TextAreaAndButtonViewModel, OptionViewModel, SelectViewModel
// Conditional requirement:
//  knockout.enterkey.js - needed if the html control this bind to is not inside a form and you
//                         want the enter key to work when the textbox has focus
//  knockout.areaRowsColumns.js - needed if you want to bind rows and columns.
//  knockout.placeholder.js - needed if you want to bind the placeholder with easy syntax
loadModule(window.define, "TextAreaSelectAndButtonViewModel",
    ["ko", "SelectViewModel", "TextAreaAndButtonViewModel"],
    [ko, SelectViewModel, TextAreaAndButtonViewModel],
    function(ko,SelectViewModel){
        var TextAreaSelectAndButtonViewModel = function (textAreaModel, buttonModel, options, child) {
            var _self = this;
            var _textAreaModel = textAreaModel;
            var _buttonModel = buttonModel;
            var _options = options;
            var _child = child;
            _self.base = new TextAreaAndButtonViewModel(_textAreaModel, _buttonModel, _self);

            _self.init = function (obj) {
                obj.select = _self.SelectViewModel || new SelectViewModel(_options);
            };

            _self.init(_self);
            if (_child) {
                _self.init(_child);
            }
        };
        return TextAreaSelectAndButtonViewModel;
    }
);