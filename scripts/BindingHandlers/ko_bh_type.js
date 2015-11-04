loadModule(window.define, "ko_bh_type", ["ko"], [ko], function(ko){
        ko.bindingHandlers.type = {  
        init: function (element, valueAccessor, allBindingsAccessor) {
                var underlyingObservable = valueAccessor();
                ko.applyBindingsToNode(element, { attr: { type: underlyingObservable } } );
            }
        };
    }
);