loadModule(window.define, "StringColumn", ["ColumnModel"], [ColumnModel], function(ColumnModel){
        var StringColumn = StringColumn || function (index, text, datafield, child) {
            var _self = this;
            var _index = index;
            var _text = text;
            var _dataField = datafield;
            var _sortMethod = function (a, b) {
                if (_self.dataField.hasValue()) {
                    var aValue = _self.getFieldValue(a, _self.dataField.get());
                    var bValue = _self.getFieldValue(b, _self.dataField.get());
                    return String(aValue).localeCompare(bValue);
                } else {
                    return String(a[_self.index.get()]).localeCompare(b[_self.index.get()]);
                }
            };
            var _child = child;

            _self.init = function (obj) {
                obj.base = _self.base || new ColumnModel(_index, _text, _dataField, "string", _sortMethod, null, _self);
            };
            _self.init(_self);
            if (_child) { _self.init(_child); }
        };
        return StringColumn;
    }
);