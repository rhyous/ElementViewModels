ko.bindingHandlers.src = ko.bindingHandlers.src || {
    init: function (element, valueAccessor) {
        var underlyingObservable = valueAccessor();
        ko.applyBindingsToNode(element, { attr: { src: underlyingObservable } });
    }
};