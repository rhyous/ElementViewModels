loader("TextAreaViewModel",
    ["ko", "ElementModels/StringProperty", "ElementModels/TextAreaModel", "ElementViewModels/TextBoxViewModel"],
function(ko, StringProperty, TextAreaModel, TextBoxViewModel){
      var TextAreaViewModel = function (textAreaModel, child) {
            var _self = this;
            var _textAreaModel = (textAreaModel && textAreaModel.text instanceof StringProperty) 
                ? textAreaModel
                : new TextAreaModel(textAreaModel);
            _self.init = function(obj) {
                obj.base = new TextBoxViewModel(_textAreaModel.base, obj);
                obj.rows = ko.observable(_textAreaModel.rows.get());
                obj.columns = ko.observable(_textAreaModel.columns.get());
            };
            _self.init(_self);
            if (child) { _self.init(child); }
        };
        return TextAreaViewModel;
    }
);
