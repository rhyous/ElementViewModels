loader("AreYouSureViewModel",
    ["ko","ElementModels/ButtonModel","ElementViewModels/ButtonViewModel"],
    function(ko, ButtonModel, ButtonViewModel){
        var AreYouSureViewModel = function (text, onYesClick, onNoClick, yesCanClick, noCanClick, child) {
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
                obj.yes.hasFocus = _self.yes.hasFocus || new ko.observable(true);
                obj.no = _self.no || new ButtonViewModel(new ButtonModel("No", _onNoClick, _noCanClick));
            };

            _self.init(_self);
            if (_child) {
                _self.init(_child);
            }
        };
        return AreYouSureViewModel;
    }
);