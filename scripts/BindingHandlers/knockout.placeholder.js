ko.bindingHandlers.placeholder = ko.bindingHandlers.placeholder || {
    init: function (element, valueAccessor, allBindingsAccessor) {
        var underlyingObservable = valueAccessor();
        ko.applyBindingsToNode(element, { attr: { placeholder: underlyingObservable } } );
    }
};