QUnit.module("TableViewModel inherits base element", {
  beforeEach: function() {
    vm = new TableViewModel();
  }
});

QUnit.test("Element inherited 'accesskey' field", function(assert) {
  assert.ok(vm.accesskey);
});

QUnit.test("Element inherited 'class' field", function(assert) {
  assert.ok(vm.class);
});

QUnit.test("Element inherited 'direction' field", function(assert) {
  assert.ok(vm.direction);
});

QUnit.test("Element inherited 'draggable' field", function(assert) {
  assert.ok(vm.draggable);
});

QUnit.test("Element inherited 'dropzone' field", function(assert) {
  assert.ok(vm.dropzone);
});

QUnit.test("Element inherited 'hidden' field", function(assert) {
  assert.ok(vm.hidden);
});

QUnit.test("Element inherited 'id' field", function(assert) {
  assert.ok(vm.id);
});

QUnit.test("Element inherited 'lang' field", function(assert) {
  assert.ok(vm.lang);
});

QUnit.test("Element inherited 'spellcheck' field", function(assert) {
  assert.ok(vm.spellcheck);
});

QUnit.test("Element inherited 'style' field", function(assert) {
  assert.ok(vm.style);
});

QUnit.test("Element inherited 'tabindex' field", function(assert) {
  assert.ok(vm.tabindex);
});

QUnit.test("Element inherited 'title' field", function(assert) {
  assert.ok(vm.title);
});

QUnit.test("Element inherited 'translate' field", function(assert) {
  assert.ok(vm.translate);
});

QUnit.module("TableViewModel Constructor tests", {
  beforeEach: function() {
	columns = [new StringColumn(0,"First Name"), new StringColumn(1, "Last Name"), new DateColumn(2,"Date of Birth")];
	rows = [["Johnny","Johns", "1/1/1992"],
				["Billy","Bills", "7/21/1990"],
				["Franky","Franks", "12/8/1989"],
				["Linda","Linderson", "4/30/2001"]];
	caption = "Contact List";
    vm = new TableViewModel(columns, rows, caption);
  }
});

QUnit.test("Constructor rows().", function(assert) {
	assert.expect(vm.rows().length);
	for (i = 0; i < vm.rows().length; ++i)
		assert.equal(vm.rows()[i], rows[i]);
});

QUnit.test("Constructor columns().", function(assert) {
	assert.expect(vm.columns().length);
	for (i = 0; i < vm.columns().length; ++i)
		assert.equal(vm.columns()[i], columns[i]);
});

QUnit.test("Constructor caption().", function(assert) {
		assert.equal(vm.caption(), caption);
});

QUnit.module("TableViewModel Html tests", {
  beforeEach: function() {
	columns = ["First Name", "Last Name", "Date of Birth"];
	rows = [["Johnny","Johns", "1/1/1992"],
				["Billy","Bills", "7/21/1990"]];
	caption = "Contact List";
    vm = new TableViewModel(columns, rows, caption);
  }
});

QUnit.test("Html for thead", function(assert) {
	var expected = "<thead>\n\
  <tr data-bind=\"foreach: {data: columns, as: 'col'}\">\n\
    <th data-bind=\"text: col.text.get(), css: 'column-' + col.text.get().split(/[s/]+/).join('-')\">\n\
  </tr>\n\
</thead>\n";
	assert.equal(vm.thead(), expected);
});

QUnit.test("tbody", function(assert) {
	var expected = "<tbody>\n\
  <!-- ko foreach: {data: rows, as: 'item'} -->\n\
  <tr data-bind=\"foreach: {data: $parent.columns, as: 'col'}\">\n\
    <td data-bind=\"text: col.getFieldValue(item, null, $index()), css: 'column-' + col.text.get().split(/[s/]+/).join('-')\">\n\
  </tr>\n\
  <!-- /ko -->\n\
</tbody>\n";
	assert.equal(vm.tbody(), expected);
});

QUnit.test("table", function(assert) {
	var expected = "<table>\n\
<caption>Contact List</caption>\n\
<thead>\n\
  <tr data-bind=\"foreach: {data: columns, as: 'col'}\">\n\
    <th data-bind=\"text: col.text.get(), css: 'column-' + col.text.get().split(/[s/]+/).join('-')\">\n\
  </tr>\n\
</thead>\n\
<tbody>\n\
  <!-- ko foreach: {data: rows, as: 'item'} -->\n\
  <tr data-bind=\"foreach: {data: $parent.columns, as: 'col'}\">\n\
    <td data-bind=\"text: col.getFieldValue(item, null, $index()), css: 'column-' + col.text.get().split(/[s/]+/).join('-')\">\n\
  </tr>\n\
  <!-- /ko -->\n\
</tbody>\n\
</table>\n";
	assert.equal(vm.table(), expected);
});