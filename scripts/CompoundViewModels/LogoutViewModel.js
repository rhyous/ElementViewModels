// Requirements:
//  knockout, BaseElement, TextElement, ButtonModel, ButtonViewModel

var LogoutViewModel = LogoutViewModel || function (text, linkText, onClick, child) {
    var _self = this;
    var _text = text;
    var _linkText = linkText;
    var _onClick = onClick;
    var _child = child;

    _self.init = function (obj) {
        obj.text = _self.text || new ko.observable(_text);
        obj.logout = _self.logout || new ButtonViewModel(new ButtonModel(_linkText, _onClick));
    };

    _self.init(_self);
    if (_child) {
        _self.init(_child);
    }
};