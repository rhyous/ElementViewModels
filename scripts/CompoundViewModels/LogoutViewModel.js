loader("LogoutViewModel", ["ko","ElementModels/ButtonModel", "ElementViewModels/ButtonViewModel"],
    function (ko, ButtonModel, ButtonViewModel) {
        var LogoutViewModel = function(text, linkText, onClick, child) {
            var _self = this;
            var _text = text;
            var _linkText = linkText;
            var _onClick = onClick;
            var _child = child;

            _self.init = function(obj) {
                obj.text = new ko.observable(_text);
                obj.logout = new ButtonViewModel(new ButtonModel(_linkText, _onClick));
            };

            _self.init(_self);
            if (_child) {
                _self.init(_child);
            }
        };
        return LogoutViewModel;
    }
);