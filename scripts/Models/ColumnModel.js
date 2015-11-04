loadModule(window.define, "ColumnModel", 
            ["StringProperty". BoolProperty], 
            [StringProperty, BoolProperty], 
            function(StringProperty, BoolProperty){
        var ColumnModel = ColumnModel || function (index, text, datafield, type, sortMethod, filterMethod, child) {
            var _self = this;
            var _index = index;
            var _text = text;
            var _dataField = datafield;
            var _type = type;
            var _sortMethod = sortMethod;
            var _filterMethod = filterMethod;
            var _child = child;

            _self.init = function (obj) {
                obj.isString = function (val) { return typeof val == 'string' || val instanceof String; };
                obj.isNullOrWhitespace = function (str) { return !str || String(str).replace(/\s/g, '').length < 1; };
                obj.isNullOrUndefined = function (val) { return val === undefined || val === null || (obj.isString(val) && obj.isNullOrWhitespace(val)); };
                obj.index = _self.index || new IntProperty(_index);
                obj.text = _self.text || new StringProperty(_text);
                obj.dataField = _self.dataField || new StringProperty(_dataField);
                obj.type = _self.type || new StringProperty(_type);
                obj.sortMethod = _self.sortMethod || _sortMethod;
                obj.sortReverse = _self.sortReverse || ko.observable();
                obj.filter = _self.filter || ko.observable();
                obj.getFieldValue = function (row, fields, index) {
                    var _value = row;
                    var _fields = fields || obj.dataField.get();
                    if (!_fields) {
                        return row[index];
                    }
                    var fieldArray = [_fields];
                    if (_fields.indexOf(".") > -1) {
                        fieldArray = _fields.split(".");
                    }
                    for (var i = 0; i < fieldArray.length; i++) {
                        var startParenthesis = fieldArray[i].indexOf("(");
                        if (startParenthesis === -1) {
                            _value = _value[fieldArray[i]];
                            continue;
                        }
                        var endParenthesis = fieldArray[i].indexOf(")");
                        if (startParenthesis + 1 === endParenthesis) {
                            _value = _value[fieldArray[i].substring(0, fieldArray[i].length - 2)]();
                            continue;
                        }
                        var paramString = fieldArray[i].substring(startParenthesis + 1, endParenthesis);
                        var params = paramString.split(",");
                        var method = _value[fieldArray[i].substring(0, fieldArray[i].length - (fieldArray[i].length - startParenthesis))];
                        if (method) { _value = method.apply(_value, params); };
                    }
                    return _value;
                }
                obj.filterMethod = _filterMethod || function (a) {
                    if (obj.isNullOrUndefined(obj.filter())) {
                        return true;
                    }
                    if (_self.dataField.hasValue()) {
                        var aValue = obj.getFieldValue(a, _self.dataField.get());
                        return aValue.indexOf(obj.filter()) > -1;
                    } else {
                        return a[_self.index.get()].indexOf(obj.filter()) > -1;
                    }
                };
            };
            _self.init(_self);
            if (_child) { _self.init(_child); }
        };
        return ColumnModel;
    }
);