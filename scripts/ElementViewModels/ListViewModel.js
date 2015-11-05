loader("ListViewModel", 
    ["ko", "ElementViewModels/BaseElement", "ElementViewModels/ElementViewModel"],
    function(ko,BaseElement, ElementViewModel){
        var ListViewModel = function (list, type, tag, start, child) {
            // Private
            var _self = this;
            var _list = (list) ? list : [];
            var _type = type;
            var _tag = tag;
            var _start = start;
            var _child = child;
            var _defaultTag = "<ol>";

            _self.init = function (obj, isChild) {
                new BaseElement(obj);

                // Public
                obj.list = _self.list || ko.observableArray(_list);
                obj.type = _self.type || ko.observable(_type);
                if (typeof (_tag) === "ElementViewModel") {
                    obj.tag = _tag;
                } else {
                    obj.tag = _self.tag || new ElementViewModel(obj.isNullOrWhitespace(tag) ? _tag : _defaultTag);
                }
                obj.listTag = _self.listTag || new ElementViewModel("<li>");
                obj.start = _self.start || ko.observable(_start);

                obj.innerHtml = _self.innerHtml || ko.computed(function () {
                    var html = "";
                    ko.utils.arrayForEach(obj.list(), function (item) {
                        html += obj.listTag.tag() + item + obj.listTag.endTag() + "\n";
                    });
                    return html;
                });

                obj.html = _self.html || ko.computed(function () {
                    return obj.tag.tag() + "\n" + obj.innerHtml() + obj.tag.endTag() + "\n";
                });
            };
            _self.init(_self);
            if (_child) {
                _self.init(_child, true);
            }
        };
        return ListViewModel;
    }
);
