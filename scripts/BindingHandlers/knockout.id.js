ko.bindingHandlers.id = ko.bindingHandlers.id || {
    init: function (element, valueAccessor) {
        var underlyingObservable = valueAccessor();
        ko.applyBindingsToNode(element, { attr: { id: underlyingObservable } });
    }
};