// Requirements:
//  knockout, BaseElement, ButtonModel, ButtonViewModel

var AreYouSureViewModel = AreYouSureViewModel || function (text, onYesClick, onNoClick, yesCanClick, noCanClick, child) {
    var _self = this;
    var _text = text;
    var _onYesClick = onYesClick;
    var _onNoClick = onNoClick;
    var _yesCanClick = yesCanClick;
    var _noCanClick = noCanClick;
    var _child = child;

    _self.init = function (obj) {
        obj.text = _self.text || new ko.observable(_text);
        obj.yes = _self.yes || new ButtonViewModel(new ButtonModel("Yes", _onYesClick, _yesCanClick));
        obj.no = _self.no || new ButtonViewModel(new ButtonModel("No", _onNoClick, _noCanClick));
    };

    _self.init(_self);
    if (_child) {
        _self.init(_child);
    }
};