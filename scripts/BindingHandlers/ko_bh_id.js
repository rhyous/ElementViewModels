loadModule(window.define, "ko_bh_id", ["ko"], [ko], function(ko){
        ko.bindingHandlers.id = {
            init: function (element, valueAccessor) {
                var underlyingObservable = valueAccessor();
                ko.applyBindingsToNode(element, { attr: { id: underlyingObservable } });
            }
        };
    }
);