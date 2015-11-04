loadModule(window.define, "BoolProperty", ["Property"], [Property], function(Property){
        var BoolProperty = function (value) {
            var _self = this;
            _self.base = new Property(value, _self);
            _self.set = function (value) {
                if (typeof (value) !== 'boolean' && !(value instanceof Boolean))
                    throw "value must be a boolean.";
                _self.base.set(value);
            };
        };
        return BoolProperty;
    }
);