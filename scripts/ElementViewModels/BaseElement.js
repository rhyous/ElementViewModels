var BaseElement = BaseElement || function (child) {
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

// Requuires knockout.maxlength.js
var TextElement = TextElement || function (text, maxLength, child) {
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