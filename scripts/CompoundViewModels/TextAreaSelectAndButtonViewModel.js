var deps = ["ko", 
            "ElementViewModels/SelectViewModel", 
            "CompoundViewModels/TextAreaAndButtonViewModel",
            "BindingHandlers/ko_bh_enterkey",
            "BindingHandlers/ko_bh_columns",
            "BindingHandlers/ko_bh_rows",
            "BindingHandlers/ko_bh_placeholder"];
loader("TextAreaSelectAndButtonViewModel", deps,
    function(ko, SelectViewModel, TextAreaAndButtonViewModel){
        var TextAreaSelectAndButtonViewModel = function (textAreaModel, buttonModel, options, child) {
            var _self = this;
            var _textAreaModel = textAreaModel;
            var _buttonModel = buttonModel;
            var _options = options;
            var _child = child;
            _self.base = new TextAreaAndButtonViewModel(_textAreaModel, _buttonModel, _self);

            _self.init = function (obj) {
                obj.select = _self.SelectViewModel || new SelectViewModel(_options);
            };

            _self.init(_self);
            if (_child) {
                _self.init(_child);
            }
        };
        return TextAreaSelectAndButtonViewModel;
    }
);