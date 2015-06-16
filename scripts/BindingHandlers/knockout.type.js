ko.bindingHandlers.type = ko.bindingHandlers.type || {
    init: function (element, valueAccessor, allBindingsAccessor) {
        var underlyingObservable = valueAccessor();
        ko.applyBindingsToNode(element, { attr: { type: underlyingObservable } } );
    }
};