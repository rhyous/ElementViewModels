var deps = ["ko",
            "ElementViewModels/ButtonViewModel",
            "ElementViewModels/TextBoxViewModel",
            "BindingHandlers/ko_bh_placeholder",
            "BindingHandlers/ko_bh_maxlength"];
loader("TextBoxAndButtonViewModel", deps,
    function(ko, ButtonViewModel, TextBoxViewModel){
        var TextBoxAndButtonViewModel = function (textBoxModel, buttonModel, customValidationMethod, child) {
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
        return TextBoxAndButtonViewModel;
    }
);