var TextBoxModel = TextBoxModel || function (text, placeholder, onEnterKeyPressed, child) {
    var _self = this;
    var _text = text;
    var _placeholder = placeholder;
    var _onEnterKeyPressed = onEnterKeyPressed;
    var _child = child;

    _self.init = function (obj) {
        obj.text = new StringProperty(text);
        obj.placeholder = new StringProperty(placeholder);
        obj.onEnterKeyPressed = onEnterKeyPressed || null;
    }
    _self.init(_self);
    if (_child) {
        _self.init(_child);
    }
};