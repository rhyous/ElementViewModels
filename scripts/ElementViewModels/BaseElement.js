loadModule(window.define, "BaseElement", ["ko"], [ko], function(ko){
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
                    return typeof val === "string" || val instanceof String;
                };
                child.isNullOrWhitespace = function (str) {
                    return !str || String(str).replace(/\s/g, '').length < 1;
                };
                child.isNullOrUndefined = function (val) {
                    return val === undefined || val === null || (child.isString(val) && isNullOrWhitespace(val));
                };
            };
            if (_child) { _self.init(_child); }
        };
        return BaseElement;
    }
);