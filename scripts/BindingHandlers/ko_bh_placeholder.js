loader("ko_bh_placeholder", ["ko"], function(ko){
        ko.bindingHandlers.placeholder = {
            init: function (element, valueAccessor) {
                var underlyingObservable = valueAccessor();
                ko.applyBindingsToNode(element, { attr: { placeholder: underlyingObservable } });
            }
        };
    }
);