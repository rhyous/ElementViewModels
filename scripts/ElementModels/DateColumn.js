loader("DateColumn", ["ElementModels/ColumnModel"],
    function (ColumnModel) {
        var DateColumn = function (index, text, datafield, child) {
            var _self = this;
            var _index = index;
            var _text = text;
            var _dataField = datafield;
            var _sortMethod = function (a, b) {
                if (_self.dataField.hasValue) {
                    return new Date(a[_self.dataField.get()]) - new Date(b[_self.dataField.get()]);
                } else {
                    return new Date(a[_self.index.get()]) - new Date(b[_self.index.get()]);
                }
            };
            var _child = child;

            _self.init = function (obj) {
                obj.base = _self.base || new ColumnModel(_index, _text, _dataField, "string", _sortMethod, null, _self);
                obj.padLeft = function(text, pad, length) {
                    text = String(text);
                    while (text.length < length) {text = pad + text;}
                    return text;
                };
                obj.format = function (format) {
                    var args = Array.prototype.slice.call(arguments, 1);
                    return format.replace(/{(\d+)}/g, function (match, number) {
                        return typeof args[number] != 'undefined'
                          ? args[number]
                          : match;
                    });
                };
                obj.getFieldValue = function (row, fields, index) {
                    var d = obj.base.getFieldValue(row, fields, index);
                    if (!(d instanceof Date)){
                        d = new Date(d);
                    }
                    return obj.format("{0}/{1}/{2}", obj.padLeft(d.getMonth()+1, '0', 2), obj.padLeft(d.getDate(), '0', 2), obj.padLeft(d.getFullYear()));
                };
            }
            _self.init(_self);
            if (_child) { _self.init(_child); }
        };
        return DateColumn;
    }
);