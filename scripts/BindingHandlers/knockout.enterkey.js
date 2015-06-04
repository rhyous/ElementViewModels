// To use with a TextBoxViewModel. Not necessary when in a form with a submit button.
ko.bindingHandlers.enterKey = ko.bindingHandlers.enterKey || {
    init: function (element, valueAccessor, allBindings, vm) {
        ko.utils.registerEventHandler(element, "keypress", function (event) {
            if (event.keyCode === 13) {
                ko.utils.triggerEvent(element, "change");
                valueAccessor().call(vm, vm);
            }
            return true;
        });
    }
};