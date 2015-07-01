ko.bindingHandlers.id = ko.bindingHandlers.id || {
    init: function (element, valueAccessor, allBindingsAccessor) {
        var underlyingObservable = valueAccessor();
        ko.applyBindingsToNode(element, { attr: { id: underlyingObservable } });
    }
};