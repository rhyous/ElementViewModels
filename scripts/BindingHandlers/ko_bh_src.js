loader("ko_bh_src", ["ko"], function(ko){
        ko.bindingHandlers.src = {
            init: function (element, valueAccessor) {
                var underlyingObservable = valueAccessor();
                ko.applyBindingsToNode(element, { attr: { src: underlyingObservable } });
            }
        };
    }
);