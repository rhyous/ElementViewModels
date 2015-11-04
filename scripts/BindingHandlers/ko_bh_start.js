loadModule(window.define, "ko_bh_start", ["ko"], [ko], function(ko){
        ko.bindingHandlers.start = {
            init: function (element, valueAccessor, allBindingsAccessor) {
                var underlyingObservable = valueAccessor();
                ko.applyBindingsToNode(element, { attr: { start: underlyingObservable } } );
            }
        };
    }
);