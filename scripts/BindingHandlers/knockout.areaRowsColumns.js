ko.bindingHandlers.rows = ko.bindingHandlers.rows || {
	init : function (element, valueAccessor, allBindingsAccessor) {
            var underlyingObservable = valueAccessor();
            ko.applyBindingsToNode(element, { attr : { rows : underlyingObservable	} });
	}
};

ko.bindingHandlers.cols = ko.bindingHandlers.cols || {
	init : function (element, valueAccessor, allBindingsAccessor) {
            var underlyingObservable = valueAccessor();
            ko.applyBindingsToNode(element, { attr : { cols : underlyingObservable } });
	}
};

// Also support if they use 'columns' instead of 'cols'
ko.bindingHandlers.columns = ko.bindingHandlers.cols;
