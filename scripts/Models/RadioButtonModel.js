loadModule(window.define, "RadioButtonModel", ["ko"], [ko], function(ko){
        var RadioButtonModel = function (parent, inText, inValue, inGroupName, canSelectMethod) {
            // Private
            var _self = this;
            var _canSelectMethod = (canSelectMethod) ? canSelectMethod : function () { return true; };
            var _parent = parent;

            // Public
            _self.text = ko.observable(inText);
            _self.value = ko.observable(inValue);
            _self.group = ko.observable(inGroupName);
            _self.isSelected = ko.computed(function () {
                return (_parent && _parent.selectedValue) ? _parent.selectedValue() == _self.value() : false;
            }, _self);
            _self.canSelect = ko.computed(function () { return _canSelectMethod(); });
        };
        return RadioButtonModel;
    }
);