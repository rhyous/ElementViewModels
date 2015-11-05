 loader("TextAreaViewModel",
    ["ko", "Models/TextAreaModel", "ElementViewModels/TextBoxViewModel"],
    function(ko, TextAreaModel, TextBoxViewModel){
      var TextAreaViewModel = function (textAreaModel, child) {
            var _self = this;
            var _textAreaModel = textAreaModel || new TextAreaModel();
            _self.init = function(obj) {
                obj.base = new TextBoxViewModel(textAreaModel, obj);
                obj.rows = ko.observable(_textAreaModel.rows.get());
                obj.columns = ko.observable(_textAreaModel.columns.get());
            };
            _self.init(_self);
            if (child) { _self.init(child); }
        };
        return TextAreaViewModel;
    }
);
