loadModule(window.define, "ko_bh_placeholder", ["ko"], [ko], function(ko){
        ko.bindingHandlers.placeholder = {
            init: function (element, valueAccessor) {
                var underlyingObservable = valueAccessor();
                ko.applyBindingsToNode(element, { attr: { placeholder: underlyingObservable } });
            }
        };
    }
);