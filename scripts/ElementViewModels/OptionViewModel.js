var OptionViewModel = OptionViewModel || function (text, value, canSelectMethod, parentSelect, child) {
    // private
    var _self = this;
    var _text = text;
    var _value = value;
    var _canSelectMethod = canSelectMethod;
    var _parent = parentSelect;
    var _child = child;
    _self.base = new TextElement(_text, null, _self);

    _self.init = function (obj, isChild) {
        if (isChild) { _self.base.init(obj) };

        // public
        obj.parent = _self.parent || _parent;
        var tmpVal = obj.isNullOrUndefined(_value) ? _self.text() : _value;
        obj.value = _self.value || ko.observable(tmpVal);
        obj.isSelected = _self.isSelected || ko.computed(function () {
            return (obj.parent && obj.parent.selectedValue ? obj.parent.selectedValue() === obj.value() : false);
        });
        obj.canSelectMethod = _self.canSelectMethod || ko.observable(_canSelectMethod);
        obj.canSelect = _self.canSelect || ko.computed(function () {
            return (obj.canSelectMethod && obj.canSelectMethod() !== undefined) ? obj.canSelectMethod()() : true;
        });
    };

    _self.init(_self);
    if (_child) {
        _self.init(_child, true);
    }
};