loader("StringProperty", ["ElementModels/Property"], function(Property){
        var TypedProperty = function (value, type) {
            var _self = this;
            var _type = type;
            _self.base = new Property(value, _self);
            _self.set = function (value) {
                if (typeof (value) !== typeof (_type) && !(value instanceof _type))
                    throw "value must be a " + typeof (_type) + ".";
                _self.base.set(value);
            };
        };
        return TypeProperty;
    }
);