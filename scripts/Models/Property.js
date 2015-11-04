loadModule(window.define, "Property", null, null, function(){
        var Property = function (value, child) {
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
            if (_child) { _self.init(_child, value); }
        };
        return Property;
    }
);
