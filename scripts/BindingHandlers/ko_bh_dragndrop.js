loadModule(window.define, "ko_bh_dragndrop", ["ko"], [ko], function(ko){
        ko.bindingHandlers.drag = {
            init: function (element, valueAccessor) {
                var dragElement = $(element);
                var dragOptions = {
                    helper: "clone",
                    revert: true,
                    revertDuration: 0,
                    start: function () {
                        _dragged = ko.utils.unwrapObservable(valueAccessor().value);
                    },
                    cursor: "url(/img/SmartDevice22x33.png), auto"
                };
                dragElement.draggable(dragOptions).disableSelection();
            }
        };

        ko.bindingHandlers.drop = {
            init: function (element, valueAccessor) {
                var dropElement = $(element);
                var dropOptions = {
                    drop: function (event, ui) {
                        valueAccessor().value(_dragged);
                    }
                };
                dropElement.droppable(dropOptions);
            }
        };
    }
);