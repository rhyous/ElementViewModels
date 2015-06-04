var TextBoxModel = function(text, placeholder, onEnterKeyPressed) {
    _self = this;
    _self.text = new StringProperty(text);
    _self.placeholder = new StringProperty(placeholder);
    _self.onEnterKeyPressed = onEnterKeyPressed || null;
}