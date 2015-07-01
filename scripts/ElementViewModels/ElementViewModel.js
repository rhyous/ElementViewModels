var ElementViewModel = ElementViewModel || function (tag, child) {
    var _self = this;
    var _tag = tag;
    var _child = child;
    var _isSubscribed = false;
    _self.init = function (obj) {
        new BaseElement(obj);
        obj.endTag = _self.endTag || ko.observable();
        obj.tag = _self.tag || ko.observable();
        if (!_isSubscribed) {
            obj.tag.subscribe(function (tag) {
                var endTag = obj.tag().slice(0, 1) + "/" + obj.tag().slice(1);
                obj.endTag(endTag);
            });
            _isSubscribed = true;
        }
        obj.tag(_tag);
        obj.isEmpty = _self.isEmpty || ko.computed(function () {
            return !obj.tag() || obj.isNullOrWhitespace(obj.tag());
        });
    };
    _self.init(_self);
    if (_child) { _self.init(_child); }
};