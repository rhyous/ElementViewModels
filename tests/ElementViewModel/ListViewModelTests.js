QUnit.module("ListViewModel inherits base element", {
  beforeEach: function() {
    vm = new ListViewModel();
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

QUnit.module("ListViewModel Constructor tests", {
  beforeEach: function() {
    list = ["Jake", "Alexis", "Kendra"];
    type = "A";
    tag = "<ol>";
    start = 10;
    vm = new ListViewModel(list, type, tag, start);
  }
});
QUnit.test("Constructor list().", function(assert) {
  assert.equal(vm.list(), list);
});

QUnit.test("Constructor type().", function(assert) {
  assert.equal(vm.type(), type);
});

QUnit.test("Constructor tag().", function(assert) {
  assert.equal(vm.tag.tag(), tag);
});

QUnit.test("Constructor start().", function(assert) {
  assert.equal(vm.start(), start);
});

QUnit.test("Constructor tag.endTag().", function(assert) {
  assert.equal(vm.tag.endTag(), "</ol>");
});

QUnit.test("Constructor innerHtml().", function(assert) {
  var expected = "<li>Jake</li>\n<li>Alexis</li>\n<li>Kendra</li>\n";
  assert.equal(vm.innerHtml(), expected);
});

QUnit.test("Constructor html().", function(assert) {
  var expected = "<ol>\n<li>Jake</li>\n<li>Alexis</li>\n<li>Kendra</li>\n</ol>\n";
  assert.equal(vm.html(), expected);
});


QUnit.module("ListViewModel functionality", {
  beforeEach: function() {
    list = ["Jake", "Alexis", "Kendra"];
    type = "A";
    tag = "<ol>";
    start = 10;
    vm = new ListViewModel(list, type, tag, start);
  }
});

QUnit.test("Constructor tag.endTag().", function(assert) {
    vm.tag.tag("<ul>");
    assert.equal(vm.tag.endTag(), "</ul>");
});