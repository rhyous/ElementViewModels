loadModule(window.define, "ko_bh_columns", ["ko"], [ko], function(ko){
        ko.bindingHandlers.cols = {
            init : function (element, valueAccessor, allBindingsAccessor) {
                    var underlyingObservable = valueAccessor();
                    ko.applyBindingsToNode(element, { attr : { cols : underlyingObservable } });
            }
        };
        ko.bindingHandlers.columns = ko.bindingHandlers.cols;
    }
);