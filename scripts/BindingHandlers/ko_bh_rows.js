loader("ko_bh_rows", ["ko"], function(ko){
        ko.bindingHandlers.rows = {
        init : function (element, valueAccessor, allBindingsAccessor) {
                var underlyingObservable = valueAccessor();
                ko.applyBindingsToNode(element, { attr : { rows : underlyingObservable	} });
            }
        };
    }
);
