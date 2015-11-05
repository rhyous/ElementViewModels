loader("RadioButtonViewModel",
    ["ko", "Models/SelectableListDataModel"], // Todo: Can't find SelectableListDataModel, maybe use OptionViewModel?
    function(ko){
        var RadioButtonViewModel = function (radioButtonDataModel, group) {
            // Private
            var _self = this;
            var _defaultDataModel = new SelectableListDataModel();
            var _dataModel = (radioButtonDataModel) ? radioButtonDataModel : _defaultDataModel;

            // Public
            _self.class = _dataModel.class ? ko.observable(_dataModel.group) : ko.observable("RadioButtonClass");
            _self.group = group ? ko.observable(group) : ko.observable("Group");
            _self.selectedValue = _dataModel.defaultValue ? ko.observable(_dataModel.defaultValue) : ko.observable();
            _self.canSelect = _dataModel.canSelectMethod ? ko.computed(_dataModel.canSelectMethod) : ko.computed(_defaultDataModel.canSelectMethod);

            _self.list = ko.observableArray();
            if (_dataModel.labels && _dataModel.values && _self.group) {
                for (var i = 0; i < _dataModel.labels.length; i++) {
                    _self.list.push(new RadioButtonModel(_self, _dataModel.labels[i], _dataModel.values[i], _self.group, _self.canSelect));
                }
            }

            _self.selectedIndex = ko.computed(function () {
                var index = 0;
                var foundIndex = -1;
                ko.utils.arrayForEach(_self.list(), function (item) {
                    if (_self.selectedValue() == item.value()) {
                        foundIndex = index;
                    }
                    index++;
                });
                return foundIndex;
            }, _self);

           _self.selectedText = ko.computed(function () {
                var index = _self.selectedIndex();
                return (_self.list()[index]) ? _self.list()[index].text() : "";
            }, _self);

            _self.clear = function (value) {
                _self.selectedValue(value ? value : "");
            };
        };
        return RadioButtonViewModel;
    }
);
