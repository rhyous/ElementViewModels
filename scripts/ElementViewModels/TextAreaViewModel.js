var TextAreaViewModel = TextAreaViewModel || function (textAreaModel, child) {
    var _self = this;
    var _textAreaModel = textAreaModel || new TextAreaModel();
    _self.base = new TextBoxViewModel(textAreaModel, _self);
    _self.init = function (obj) {
        obj.rows = ko.observable(_textAreaModel.rows.get());
        obj.columns = ko.observable(_textAreaModel.columns.get());
    }
    _self.init(_self);
    if (child) {
        _self.init(child);
    }
}