loadModule(window.define, "ko_bh_boundHtml", ["ko"], [ko], function(ko){
        ko.bindingHandlers.boundHtml = {
            init: function(element, valueAccessor, allBindings, viewModel, bindingContext) {
               return { controlsDescendantBindings:true };
            },
            update: function(element, valueAccessor, allBindings, viewModel, bindingContext) {
                ko.cleanNode(element);
                element.innerHTML=ko.unwrap(valueAccessor());
                ko.applyBindingsToDescendants(viewModel,element);
            }
        };
    }
);