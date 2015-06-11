var TableViewModel = TableViewModel || function(columnNames, rows, caption, child) {
  var _self = this;
  var _columnNames = columnNames;
  var _rows = rows;
  var _caption = caption;
  var _child = child;
  
  _self.init = function(obj) {
    new BaseElement(obj);
    obj.columnNames = _self.columnNames || ko.observableArray(_columnNames);
    obj.rows = _self.rows || ko.observableArray(_rows);
	obj.caption = _self.caption || ko.observable(_caption);
	
	obj.thead = _self.thead || ko.computed( function() {
		var html = "<tr>\n\t";
		ko.utils.arrayForEach(obj.columnNames(), function(columnName) {
			html += "<th>" + columnName + "</th>";
		});
		html += "\n</tr>\n";
		return html;
	});

	obj.tbody =  _self.tbody || ko.computed( function() {
		var html = "";
		ko.utils.arrayForEach(obj.rows(), function(row) {
			html += "<tr>\n\t";
			ko.utils.arrayForEach(row, function(item) {
				html += "<td>" + item + "</td>";
			});
			html += "\n</tr>\n";
		});
		return html;		
	});
	
	obj.innerHtml = _self.innerHtml || ko.computed( function() {
		var html = "";
		if (!obj.isNullOrWhitespace(obj.caption())) {
			html += "<caption>" + obj.caption() + "</caption>\n";
		}
		html += obj.thead();
		html += obj.tbody();
		return html;
	});
	
	obj.table = _self.table || ko.computed( function() {
		return "<table>\n" + obj.innerHtml() + "\n<table>\n";
	});
  };
  
  _self.init(_self); 
  if (_child) { _self.init(_child); } 
};
