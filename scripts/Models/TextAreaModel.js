loader("TextAreaModel", 
    ["Models/IntProperty", "Models/TextBoxModel"],
    function(IntProperty, TextBoxModel){
        var TextAreaModel = function (text, placeholder, onEnterKeyPressed, rows, columns) {
            var _self = this;
            _self.base = new TextBoxModel(text, placeholder, onEnterKeyPressed, null, _self);
            _self.rows = new IntProperty(rows);
            _self.columns = new IntProperty(columns);
        };
        return TextAreaModel;
    }
);