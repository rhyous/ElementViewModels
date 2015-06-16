var ColumnModel = ColumnModel || function (index, text, type, sortMethod, filterMethod, child) {
    var _self = this;
    var _index = index;
    var _text = text;
    var _type = type;
    var _sortMethod = sortMethod;
    var _filterMethod = filterMethod;
    var _child = child;

    _self.init = function (obj) {
        obj.isString = function(val) { return typeof val == 'string' || val instanceof String; }
        obj.isNullOrWhitespace = function (str) { return !str || String(str).replace(/\s/g, '').length < 1; };
        obj.isNullOrUndefined = function (val) { return val === undefined || val === null || (obj.isString(val) && obj.isNullOrWhitespace(val)); };
        obj.index = _self.index || new IntProperty(_index);
        obj.text = _self.text || new StringProperty(_text);
        obj.type = _self.type || new StringProperty(_type);
        obj.sortMethod = _self.sortMethod || sortMethod || null;
        obj.sortReverse = _self.sortReverse || ko.observable();
        obj.filter = _self.filter || ko.observable();
        obj.filterMethod = _filterMethod || function(a) {
            if (!obj.isNullOrUndefined(obj.filter())) { return a[_self.index.get()].indexOf(obj.filter()) > -1; }
            return true;
        };
    }
    _self.init(_self);
    if (_child) {
        _self.init(_child);
    }
};

var StringColumn = StringColumn || function(index, text, child) {
    var _self = this;
    var _index = index;
    var _text = text;
    var _sortMethod = function(a, b) { 
        return String(a[_self.index.get()]).localeCompare(b[_self.index.get()]); 
    };
    var _child = child;

    _self.init = function (obj) {
        obj.base = _self.base || new ColumnModel(_index, text, "string", _sortMethod, null, _self);
    }
    _self.init(_self);
    if (_child) {
        _self.init(_child);
    }
}

var DateColumn = DateColumn || function(index, text, child) {
    var _self = this;
    var _index = index;
    var _text = text;
    var _sortMethod = function(a, b) { 
        return new Date(a[_self.index.get()]) - new Date(b[_self.index.get()]);
    };
    var _child = child;

    _self.init = function (obj) {
        obj.base = _self.base || new ColumnModel(_index, text, "string", _sortMethod, null, _self);
    }
    _self.init(_self);
    if (_child) {
        _self.init(_child);
    }
}