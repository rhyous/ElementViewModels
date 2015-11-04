loadModule(window.define, "StringProperty", ["Property"], [Property], function(Property){
        var StringProperty = function (value) {
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
        return StringProperty;
    }
);