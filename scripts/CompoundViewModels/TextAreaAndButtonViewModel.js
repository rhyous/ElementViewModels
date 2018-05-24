var deps = ["ko",
            "ElementModels/ButtonModel",
            "ElementViewModels/ButtonViewModel",
            "ElementModels/TextAreaModel",
            "CompoundViewModels/TextAreaViewModel",
            "BindingHandlers/ko_bh_enterkey",
            "BindingHandlers/ko_bh_columns",
            "BindingHandlers/ko_bh_rows",
            "BindingHandlers/ko_bh_placeholder"];
loader("TextAreaAndButtonViewModel", 
    deps,
    function (ko, ButtonModel, ButtonViewModel, TextAreaModel, TextAreaViewModel) {
        var TextAreaAndButtonViewModel = function (textAreaModel, buttonModel, child) {
            var _self = this;
            var _textAreaModel = textAreaModel instanceof TextAreaModel ? textAreaModel : new TextAreaModel(textAreaModel);
            var _buttonModel = buttonModel instanceof ButtonModel ? buttonModel : new ButtonModel(buttonModel);
            var _child = child;

            _self.init = function (obj) {
                obj.area = _self.textAreaViewModel || new TextAreaViewModel(_textAreaModel);
                _buttonModel.canClickMethod = function () {
                    return !obj.area.isEmpty();
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
        return TextAreaAndButtonViewModel;
    }
);