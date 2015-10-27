var TextBoxModel = TextBoxModel || function (text, placeholder, onEnterKeyPressed, maxLength, child) {
    var _self = this;
    var _text = text;
    var _placeholder = placeholder;
    var _onEnterKeyPressed = onEnterKeyPressed;
    var _child = child;
    var _maxLength = maxLength || -1;

    _self.init = function (obj) {
        obj.text = new StringProperty(_text);
        obj.placeholder = new StringProperty(_placeholder);
        obj.onEnterKeyPressed = _onEnterKeyPressed || null;
        obj.maxLength = new IntProperty(_maxLength);
    };
    _self.init(_self);
    if (_child) { _self.init(_child); }
};