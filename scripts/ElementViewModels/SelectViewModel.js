var SelectViewModel = SelectViewModel || function(optionViewModelArray, defaultValue, canSelectMethod, child) {
    // private
    var _self = this;
    var _optionViewModelArray = optionViewModelArray;
    var _defaultValue = defaultValue || (_optionViewModelArray && _optionViewModelArray.length > 0) ? _optionViewModelArray[0] : null;
    var _canSelectMethod = canSelectMethod;
    var _child = child;
    
    // Public
    _self.base = new BaseElement(_self);
    _self.init = function (obj) {
        obj.canSelect = _self.canSelect || ko.computed(function() {
            return _canSelectMethod ? _canSelectMethod() : true;
        });
        obj.list = _self.list || ko.observableArray();
        obj.selectedValue = ko.observable(_defaultValue);

        if (_optionViewModelArray) {
            for (var i = 0; i < _optionViewModelArray.length; i++) {
                _optionViewModelArray[i].parent = obj;
                _optionViewModelArray[i].canSelectMethod(obj.canSelect);
                obj.list.push(_optionViewModelArray[i]);
            }
        }

        obj.selectedIndex = _self.selectedIndex || ko.computed(function() {  
            var index = 0;
            var foundIndex = -1;
            ko.utils.arrayForEach(obj.list(), function(item) {
                if (obj.selectedValue() == item.value()) {
                    foundIndex = index;
                    return;
                }
                index++;
            });
            return foundIndex;
        });

        obj.selectedText = _self.selectedText || ko.computed(function() {
            var index = obj.selectedIndex();
            return (obj.list()[index]) ? obj.list()[index].text() : "";
        });

        obj.clear = _self.clear || function(value) {
            obj.selectedValue(value ? value : "");
        };
    };    
        
    _self.init(_self);
	if (_child) {
		_self.init(_child);
	}
};