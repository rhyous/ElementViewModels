loader("BaseElement", ["ko", "EvmUtils/StringUtils"], function (ko, StringUtils) {
        var BaseElement = function(child) {
            var _self = this;
            var _child = child;
            _self.init = function (child) {
                child.accesskey = ko.observable();
                child.class = ko.observable();
                child.direction = ko.observable();
                child.draggable = ko.observable();
                child.dropzone = ko.observable();
                child.hidden = ko.observable();
                child.id = ko.observable();
                child.lang = ko.observable();
                child.spellcheck = ko.observable();
                child.style = ko.observable();
                child.tabindex = ko.observable();
                child.title = ko.observable();
                child.translate = ko.observable();
                child.isString = function (val) {
                    return StringUtils.isString(val);
                };
                child.isNullOrWhitespace = function (val) {
                    return StringUtils.isNullOrWhitespace(val);
                };
                child.isNullOrUndefined = function (val) {
                    return StringUtils.isNullOrUndefined(val);
                };
            };
            if (_child) { _self.init(_child); }
        };
        return BaseElement;
    }
);