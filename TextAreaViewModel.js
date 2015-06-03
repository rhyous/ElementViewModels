var TextAreaViewModel = function (text, placeholder, rows, columns, onEnterKeyPressed, child) {            
    var _self = this;
    var _base = new TextBoxViewModel(text, placeholder, onEnterKeyPressed, _self);
    var _rows = rows;
    var _columns = columns;
    _self.init = function(obj) {
        obj.rows = ko.observable(_rows);
        obj.columns = ko.observable(_columns);
    }
  _self.init(_self);
  if (child) { _self.init(child); }
}
