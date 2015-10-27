ko.bindingHandlers.placeholder = ko.bindingHandlers.placeholder || {
    init: function (element, valueAccessor) {
        var underlyingObservable = valueAccessor();
        ko.applyBindingsToNode(element, { attr: { placeholder: underlyingObservable } });
    }
};