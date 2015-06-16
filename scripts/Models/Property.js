var Property = Property || function (value, child) {
    var _self = this;
    var _value = null;
    var _child = child;

    _self.init = function (obj, value) {

        obj.get = _self.get || function () {
            return _value;
        };

        obj.set = _self.set || function (value) {
            _value = value;
        };

        if (value !== undefined && value !== null) {
            obj.set(value);
        }

        obj.hasValue = _self.hasValue || function () {
            return _value !== undefined && _value !== null;
        };
    };

    _self.init(_self, value);
    if (_child) {
        _self.init(_child, value);
    }
};

var StringProperty = StringProperty || function (value) {
    var _self = this;
    _self.base = new Property(value, _self);
    _self.set = function (value) {
        if (typeof (value) !== "string" && !(value instanceof String))
            throw "value must be a string.";
        _self.base.set(value);
    };
    _self.isNullOrWhitespace = function (str) {
        return !str || str.replace(/\s/g, "").length < 1;
    };
};

var TrueFalseProperty = TrueFalseProperty || function (value) {
    var _self = this;
    _self.base = new Property(value, _self);
    _self.set = function (value) {
        if (typeof (value) !== 'boolean' && !(value instanceof Boolean))
            throw "value must be a boolean.";
        _self.base.set(value);
    };
};

var IntProperty = IntProperty || function (value) {
    var _self = this;
    _self.base = new Property(value, _self);
    _self.set = function (value) {
        if (!Number(value) === value && !value % 1 === 0)
            throw "value must be an integer.";
        _self.base.set(value);
    };
};

var TypedProperty = TypedProperty || function (value, type) {
    var _self = this;
    var _type = type;
    _self.base = new Property(value, _self);
    _self.set = function (value) {
        if (typeof (value) !== typeof (type) && !(value instanceof type))
            throw "value must be a " + typeof (type) + ".";
        _self.base.set(value);
    };
};