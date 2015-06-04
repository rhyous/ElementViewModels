QUnit.module("TextBoxViewModel inherits base element", {
  beforeEach: function() {
    vm = new TextBoxViewModel();
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

QUnit.module("TextBoxViewModel constructor tests", {
  beforeEach: function() {
    onEnterKeyPressedWasCalled = false;
    onEnterKeyPressed = function(){
      onEnterKeyPressedWasCalled = true;
    }
	text = "Hello, world!";
	placeholder = "Type here";
	var model = new TextBoxModel(text, placeholder, onEnterKeyPressed)
    vm = new TextBoxViewModel(model);
  }
});

QUnit.test("Constructor textViewModel.text()", function(assert) {
  assert.equal(text, vm.text());
});

QUnit.test("Constructor textViewModel.placeholder().", function(assert) {
  assert.equal(placeholder, vm.placeholder());
});

QUnit.test("Constructor textViewModel.onEnterKeyPressed method.", function(assert) {
  vm.onEnterKeyPressed();
  assert.ok(onEnterKeyPressedWasCalled);
});
