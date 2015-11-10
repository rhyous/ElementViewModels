loader("ArrayUtils", [], function() {
        if (!("last" in Array)) {
            Array.prototype.last = function() {
                var _self = this;
                if (_self.length > 0)
                    return _self[_self.length - 1];
                return null;
            }
        }
    }
);