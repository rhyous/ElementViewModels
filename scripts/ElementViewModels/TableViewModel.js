loadModule(window.define, "TableViewModel", ["ko", "BaseElement"], [ko, BaseElement],
    function(ko,BaseElement){
        var TableViewModel = function (columns, rows, caption, child) {
            var _self = this;
            var _columns = columns;
            var _rows = rows || [];
            var _caption = caption;
            var _child = child;

            _self.init = function (obj) {
                new BaseElement(obj);
                if (Array.isArray(columns) && _columns.length > 0) {
                    var newArray = [];
                    for (var i = 0; i < _columns.length; ++i) {
                        if (_columns[i] instanceof ColumnModel || (_columns[i].base && _columns[i].base instanceof ColumnModel)) {
                            newArray.push(columns[i]);
                        } else if (obj.isString(_columns[i])) {
                            newArray.push(new StringColumn(i, columns[i]));
                        }
                        else if (_columns[i] instanceof Date) {
                            newArray.push(new DateColumn(i, columns[i]));
                        }
                    }
                    _columns = newArray;
                }
                obj.columns = _self.columns || ko.observableArray(_columns);
                obj.fixedRows = _self.fixedRows || ko.observableArray(_rows);
                obj.rows = _self.rows || ko.observableArray(_rows.slice(0));
                obj.fixedRows.subscribe(function () { _self.rows(obj.fixedRows().slice(0)) });
                obj.onHeaderClick = function (column) {
                    obj.rows.sort(column.sortMethod);
                    if (column.sortReverse()) { obj.rows.reverse(); }
                    column.sortReverse(!column.sortReverse());
                };
                var filterOnAll = function (data) {
                    for (var i = 0; i < obj.columns().length; ++i) {
                        if (obj.isNullOrWhitespace(obj.columns()[i].filter()))
                            continue;
                        if (!obj.columns()[i].filterMethod(data)) {
                            return false;
                        }
                    }
                    return true;
                };
                obj.onHeaderFilter = function (column) {
                    var filteredArray = ko.utils.arrayFilter(obj.fixedRows(), filterOnAll);
                    obj.rows(filteredArray);
                };
                ko.utils.arrayForEach(obj.columns(), function (column) {
                    var applyFilter = function () {
                        obj.onHeaderFilter(column);
                    };
                    column.filter.subscribe(applyFilter);
                });
                obj.caption = _self.caption || ko.observable(_caption);

                obj.headerRow = _self.headerRow || ko.computed(function () {
                    var html = "  <tr data-bind=\"foreach: {data: columns, as: 'col'}\">\n"
                             + "    <th data-bind=\"text: col.text.get(), css: 'column-' + col.text.get().split(/[\s/]+/).join('-')\">\n"
                             + "  </tr>\n";
                    return html;
                });
                
                obj.thead = _self.thead || ko.computed(function () {
                    var html = "<thead>\n"
                             + obj.headerRow()
                             + "</thead>\n";
                    return html;
                });

                obj.dataRow = _self.dataRow || ko.computed(function () {
                    var html = "  <!-- ko foreach: {data: rows, as: 'item'} -->\n"
                             + "  <tr data-bind=\"foreach: {data: $parent.columns, as: 'col'}\">\n"
                             + "    <td data-bind=\"text: col.getFieldValue(item, null, $index()), css: 'column-' + col.text.get().split(/[\s/]+/).join('-')\">\n"
                             + "  </tr>\n"
                             + "  <!-- /ko -->\n";
                    return html;
                });
                
                obj.tbody = _self.tbody || ko.computed(function () {
                    var html = "<tbody>\n"
                             + obj.dataRow()
                             + "</tbody>\n";
                    return html;
                });

                obj.innerHtml = _self.innerHtml || ko.computed(function () {
                    var html = "";
                    if (!obj.isNullOrWhitespace(obj.caption())) {
                        html += "<caption>" + obj.caption() + "</caption>\n";
                    }
                    html += obj.thead();
                    html += obj.tbody();
                    return html;
                });

                obj.table = _self.table || ko.computed(function () {
                    return "<table>\n" + obj.innerHtml() + "</table>\n";
                });

                obj.defaultColumnTemplate = ko.observable("table-default-column-template");
                obj.firstColumnTemplate = ko.observable("table-first-column-template");
                obj.template = function (column) {
                    return (Array.isArray(obj.columns()) && obj.columns().length > 0 && obj.columns()[0] === column && !obj.isNullOrWhitespace(obj.firstColumnTemplate()))
                        ? obj.firstColumnTemplate()
                        : obj.defaultColumnTemplate();
                };
            };

            _self.init(_self);
            if (_child) { _self.init(_child); }
        };
        return TableViewModel;
    }
);

