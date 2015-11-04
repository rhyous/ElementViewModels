loadModule(window.define, "NumberColumn", ["ColumnModel"], [ColumnModel], function(ColumnModel){
        var NumberColumn = NumberColumn || function (index, text, datafield, child) {
            var _self = this;
            var _index = index;
            var _text = text;
            var _dataField = datafield;
            var _sortMethod = function (a, b) {
                if (_self.dataField.hasValue) {
                    return new a[_self.dataField.get()] - b[_self.dataField.get()];
                } else {
                    return new a[_self.index.get()] - b[_self.index.get()];
                }
            };
            var _child = child;

            _self.init = function(obj) {
                obj.base = _self.base || new ColumnModel(_index, _text, _dataField, "Number", _sortMethod, null, _self);
            };
            _self.init(_self);
            if (_child) { _self.init(_child); }
        };
        return NumberColumn;
    }
);