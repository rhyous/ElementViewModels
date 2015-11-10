loader("StringUtils", [], function () {
    var StringUtils = function () {
            var _self = this;
            _self.isString = function(val) {
                return typeof val === "string" || val instanceof String;
            };

            _self.isNullOrWhitespace = function(str) {
                return !str || String(str).replace(/\s/g, "").length < 1;
            };

            _self.isNullOrUndefined = function(val) {
                return val === undefined || val === null || (_self.isString(val) && _self.isNullOrWhitespace(val));
            };
        };
        return new StringUtils();
    }
);