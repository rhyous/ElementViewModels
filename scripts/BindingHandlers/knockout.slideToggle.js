ko.bindingHandlers.slideToggle = {
    init: function (element, valueAccessor) {
        var value = valueAccessor();
        $(element).toggle(ko.utils.unwrapObservable(value));
    },
    update: function (element, valueAccessor) {
        var value = valueAccessor();
        var isVisible = element.offsetWidth > 0 && element.offsetHeight > 0;
        if (ko.utils.unwrapObservable(value) != isVisible) {
            $(element).slideToggle();
        }
    }
};