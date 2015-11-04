loadModule(window.define, "ko_bh_enterkey", ["ko"], [ko], function(ko){
        ko.bindingHandlers.enterKey = {
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
    }
);