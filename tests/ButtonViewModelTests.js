QUnit.module("ButtonViewModel inherits base element", {
  beforeEach: function() {
    vm = new ButtonViewModel();
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

QUnit.module("ButtonViewModel Constructor tests", {
  beforeEach: function() {
    clickMethodWasCalled = false;
    clickMethod = function() {
      clickMethodWasCalled = true;
    };
    canClickMethodWasCalled = false;
    canClickMethod = function() {
      canClickMethodWasCalled = true;
      return true;
    };
    autoEnableButtonAfterOnClick = false;
    vm = new ButtonViewModel("Submit", clickMethod, canClickMethod, autoEnableButtonAfterOnClick);
  }
});

QUnit.test("Constructor first parameter is button text.", function(assert) {
  assert.equal("Submit", vm.text());
});

QUnit.test("Constructor 2nd parameter is clickMethod.", function(assert) {
  vm.onClick();
  assert.ok(clickMethodWasCalled);
});

QUnit.test("Constructor 3rd parameter is canClickMethod.", function(assert) {
  vm.canClick();
  assert.ok(canClickMethodWasCalled);
});

QUnit.test("Constructor 4th parameter is autoEnableButtonAfterOnClick.", function(assert) {
  assert.strictEqual(autoEnableButtonAfterOnClick, vm.autoEnableButtonAfterOnClick());
});


QUnit.module("ButtonViewModel onClick tests");

QUnit.test("onClick disables then enables button.", function(assert) {
  clickMethodWasCalled = false;
  clickMethod = function() {
    assert.ok(vm.isRunning());
    assert.ok(!vm.canClick());
    clickMethodWasCalled = true;
  };
  vm = new ButtonViewModel("Submit", clickMethod);
  vm.onClick();
  assert.ok(!vm.isRunning());
  assert.ok(vm.canClick());
  assert.ok(clickMethodWasCalled);
  assert.expect(5)
});