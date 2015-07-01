ko.bindingHandlers.help = {
    init: function (element, valueAccessor) {
        if (valueAccessor().start !== undefined && valueAccessor.stop !== null) {
            ko.utils.registerEventHandler(valueAccessor().id, "chardinJs:start", function (event) {
                valueAccessor().start.call();
                event.stopPropagation();
            });
        }
        if (valueAccessor().stop !== undefined && valueAccessor.stop !== null) {
            ko.utils.registerEventHandler(valueAccessor().id, "chardinJs:stop", function(event) {
                valueAccessor().stop.call();
                event.stopPropagation();
            });
        }
    }
};

ko.bindingHandlers.helpText = ko.bindingHandlers.helpText || {
    init: function (element, valueAccessor) {
        var underlyingObservable = valueAccessor();
        ko.applyBindingsToNode(element, { attr: { "data-intro": underlyingObservable } });
    }
};

ko.bindingHandlers.helpPosition = ko.bindingHandlers.helpPosition || {
    init: function (element, valueAccessor) {
        var underlyingObservable = valueAccessor();
        ko.applyBindingsToNode(element, { attr: { "data-position": underlyingObservable } });
    }
};