QUnit.module("TextAreaViewModel inherits BaseElement", {
  beforeEach: function() {
    vm = new TextAreaViewModel();
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

QUnit.module("TextAreaViewModel inherits TextBoxViewModel", {
  beforeEach: function() {
    onEnterKeyPressedWasCalled = false;
    onEnterKeyPressed = function(){
      onEnterKeyPressedWasCalled = true;
    }
    text = "Hello, world!";
    placeholder = "Type here";
    rows = 10;
    columns = 100;
	var model = new TextAreaModel(text, placeholder, onEnterKeyPressed, rows, columns)
    vm = new TextAreaViewModel(model);
  }
});

QUnit.test("Element inherited 'text' field", function(assert) {
  assert.ok(vm.text);
});

QUnit.test("Element inherited 'placeholder' field", function(assert) {
  assert.ok(vm.placeholder);
});

QUnit.test("Element inherited 'onEnterKeyPressed' field", function(assert) {
  assert.ok(vm.onEnterKeyPressed);
});

QUnit.test("Element inherited 'hasFocus' field", function(assert) {
  assert.ok(vm.hasFocus);
});

QUnit.test("Element inherited 'isEmpty' field", function(assert) {
  assert.ok(vm.isEmpty);
});


QUnit.module("TextAreaViewModel constructor", {
  beforeEach: function() {
    onEnterKeyPressedWasCalled = false;
    onEnterKeyPressed = function(){
      onEnterKeyPressedWasCalled = true;
    }
    text = "Hello, world!";
    placeholder = "Type here";
    rows = 10;
    columns = 100;
	var model = new TextAreaModel(text, placeholder, onEnterKeyPressed, rows, columns)
    vm = new TextAreaViewModel(model);
  }
});

QUnit.test("Constructor textAreaViewModel.text()", function(assert) {
  assert.equal(text, vm.text());
});

QUnit.test("Constructor textAreaViewModel.placeholder().", function(assert) {
  assert.equal(placeholder, vm.placeholder());
});

QUnit.test("Constructor textAreaViewModel.onEnterKeyPressed method.", function(assert) {
  vm.onEnterKeyPressed();
  assert.ok(onEnterKeyPressedWasCalled);
});

QUnit.test("Constructor textAreaViewModel.rows()", function(assert) {
  assert.equal(rows, vm.rows());
});

QUnit.test("Constructor textAreaViewModel.columns()", function(assert) {
  assert.equal(columns, vm.columns());
});

