loadModule(window.define, "IntProperty", ["Property"], [Property], function(Property){
        var IntProperty = function (value) {
            var _self = this;
            _self.base = new Property(value, _self);
            _self.set = function (value) {
                if (!Number(value) === value && !value % 1 === 0)
                    throw "value must be an integer.";
                _self.base.set(value);
            };
        };        
        return IntProperty;
    }
);