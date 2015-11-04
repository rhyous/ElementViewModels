loadModule(window.define, "TextElement",
    ["ko", "BaseElement", "extenders/ko_ex_maxlength"],
    [ko, BaseElement],
    function(ko, BaseElement){
        var TextElement = function (text, maxLength, child) {
            var _self = this;
            var _text = text;
            var _child = child;
            var _maxLength = maxLength || -1;
            _self.init = function (obj) {
                new BaseElement(obj);
                obj.maxlength = ko.observable(_maxLength);
                obj.text = _self.text || ko.observable(_text).extend({ maxLength: _maxLength });
                obj.isEmpty = _self.isEmpty || ko.computed(function () {
                    return !obj.text() || obj.isNullOrWhitespace(obj.text());
                });
            };
            _self.init(_self);
            if (_child) { _self.init(_child); }
        };
        return TextElement;
    }
);