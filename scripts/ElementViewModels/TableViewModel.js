var TableViewModel = TableViewModel || function (columns, rows, caption, child) {
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
        obj.onHeaderClick = function (column) {
            obj.rows.sort(column.sortMethod);
            if (column.sortReverse()) { obj.rows.reverse(); }
            column.sortReverse(!column.sortReverse());
        };
        obj.onHeaderFilter = function (column) {
            var filteredArray = ko.utils.arrayFilter(obj.fixedRows(), column.filterMethod);
            obj.rows(filteredArray);
        };
        ko.utils.arrayForEach(obj.columns(), function (column) {
            var applyFilter = function() {
                obj.onHeaderFilter(column);
            };
            column.filter.subscribe(applyFilter);
        });
        obj.caption = _self.caption || ko.observable(_caption);

        obj.thead = _self.thead || ko.computed(function () {
            var html = "<tr>\n\t";
            ko.utils.arrayForEach(obj.columns(), function (column) {
                html += "<th>" + column.text.get() + "</th>";
            });
            html += "\n</tr>\n";
            return html;
        });

        obj.tbody = _self.tbody || ko.computed(function () {
            var html = "";
            ko.utils.arrayForEach(obj.rows(), function (row) {
                html += "<tr>\n\t";
                ko.utils.arrayForEach(row, function (item) {
                    html += "<td>" + item + "</td>";
                });
                html += "\n</tr>\n";
            });
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
    };

    _self.init(_self);
    if (_child) { _self.init(_child); }
};
