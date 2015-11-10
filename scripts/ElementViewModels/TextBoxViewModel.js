loader("TextBoxViewModel",
    ["ko", "ElementViewModels/TextElement", "ElementModels/TextBoxModel"],
    function (ko, TextElement, TextBoxModel) {
        var TextBoxViewModel = function (textBoxModel, child) {
            // Private
            var _self = this;
            var _textBoxModel = (textBoxModel && textBoxModel instanceof TextBoxModel) ? textBoxModel : new TextBoxModel(textBoxModel);
            var _onEnterKeyPressed = (_textBoxModel.onEnterKeyPressed) ? _textBoxModel.onEnterKeyPressed : function () {
                return true;
            };
            var _child = child;

            _self.init = function (obj) {
                if (!obj) { return; }
                obj.base = new TextElement(_textBoxModel.text.get(), _textBoxModel.maxLength.get(), obj);
                obj.placeholder = _self.placeholder || ko.observable(_textBoxModel.placeholder.get());
                obj.onEnterKeyPressed = _onEnterKeyPressed;
                obj.hasFocus = _self.hasFocus || ko.observable(false);
            };

            _self.init(_self);
            if (child) { _self.init(_child); }
        };
        return TextBoxViewModel;
    }
);
