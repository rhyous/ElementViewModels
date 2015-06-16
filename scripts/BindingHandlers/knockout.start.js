ko.bindingHandlers.start = ko.bindingHandlers.start || {
    init: function (element, valueAccessor, allBindingsAccessor) {
        var underlyingObservable = valueAccessor();
        ko.applyBindingsToNode(element, { attr: { start: underlyingObservable } } );
    }
};