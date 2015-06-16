var TextBoxViewModel = TextBoxViewModel || function (textBoxModel, child) {
    // Private
    var _self = this;
    var _textBoxModel = (textBoxModel) ? textBoxModel : new TextBoxModel();
    var _child = child;
    var _onEnterKeyPressed = (_textBoxModel.onEnterKeyPressed) ? _textBoxModel.onEnterKeyPressed : function () {
        return true;
    };
    _self.base = new TextElement(_textBoxModel.text.get(), _self);

    _self.init = function (obj, isChild) {
        if (isChild) { _self.base.init(obj); }

        // Public
        obj.placeholder = _self.placeholder || ko.observable(_textBoxModel.placeholder.get());
        obj.onEnterKeyPressed = _onEnterKeyPressed;
        obj.hasFocus = _self.hasFocus || ko.observable(false);
    };

    _self.init(_self);
    if (child) {
        _self.init(child, true);
    }
};