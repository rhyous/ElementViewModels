loader("SelectViewModel",
    ["ko", "ElementViewModels/BaseElement", "ElementViewModels/OptionViewModel"],
    function(ko, BaseElement, OptionViewModel){
        var SelectViewModel = function (options, defaultValue, canSelectMethod, child) {
            // private
            var _self = this;
            var _options = options;
            var _defaultValue = defaultValue || ((_options && _options.length > 0) ? _options[0] : null);
            var _canSelectMethod = canSelectMethod;
            var _child = child;

            // Public
            _self.base = new BaseElement(_self);
            _self.init = function (obj) {
                if (Array.isArray(_options) && _options.length > 0) {
                    var newArray = [];
                    for (var i = 0; i < _options.length; ++i) {
                        if (_options[i] instanceof OptionViewModel || (_options[i].base && _options[i].base instanceof OptionViewModel)) {
                            newArray.push(_options[i]);
                        } else {
                            newArray.push(new OptionViewModel(_options[i]));
                        }
                    }
                    _options = newArray;
                }
                obj.canSelect = _self.canSelect || ko.computed(function () {
                    return _canSelectMethod ? _canSelectMethod() : true;
                });
                obj.list = _self.list || ko.observableArray();
                obj.selectedValue = ko.observable(_defaultValue);
                
                obj.add = function (text, value, canSelectMethod) {
                    obj.list.push(new OptionViewModel(text, value, canSelectMethod, obj));
                };

                if (_options) {
                    for (var id = 0; id < _options.length; id++) {
                        _options[id].parent = obj;
                        _options[id].canSelectMethod(obj.canSelect);
                        obj.list.push(_options[id]);
                    }
                }

                obj.selectedIndex = _self.selectedIndex || ko.computed(function () {
                    var index = 0;
                    var foundIndex = -1;
                    ko.utils.arrayForEach(obj.list(), function (item) {
                        if (obj.selectedValue() && obj.selectedValue() === item.value()) {
                            foundIndex = index;
                            return;
                        }
                        index++;
                    });
                    return foundIndex;
                });

                obj.selectedText = _self.selectedText || ko.computed(function () {
                    var index = obj.selectedIndex();
                    return (obj.list()[index]) ? obj.list()[index].text() : "";
                });

                obj.clear = _self.clear || function (value) {
                    obj.selectedValue(value || _defaultValue);
                };
            };

            _self.init(_self);
            if (_child) { _self.init(_child); }
        };
        return SelectViewModel;
    }
);
