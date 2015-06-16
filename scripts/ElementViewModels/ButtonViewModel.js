var ButtonViewModel = ButtonViewModel || function (buttonModel, child) {
    // Private
    var _self = this;
    var _buttonModel = buttonModel || new ButtonModel();

    _self.init = function (obj) {
        new TextElement(_buttonModel.text.get(), obj);
        // Public
        _self.buttonModel = _buttonModel;
        obj.autoEnableButtonAfterOnClick = ko.observable(_buttonModel.autoEnableButtonAfterOnClick.get());
        obj.onClick = (_buttonModel.clickMethod) ? function () {
            if (!obj.canClick())
                return;
            obj.isRunning(true);
            _buttonModel.clickMethod();
            if (obj.autoEnableButtonAfterOnClick())
                obj.isRunning(false);
        } : function () {
            return true;
        };

        obj.isRunning = ko.observable(false);

        obj.canClick = ko.computed(function () {
            return !obj.isRunning() && (!(_buttonModel.canClickMethod) || _buttonModel.canClickMethod());
        });
        obj.class = ko.observable();
    }
    _self.init(_self);
    if (child) {
        _self.init(child);
    }
};