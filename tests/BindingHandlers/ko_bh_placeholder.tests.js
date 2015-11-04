QUnit.module("TextBoxViewModel inherits base element", {
  beforeEach: function() {
    element = $("<input type='text'/>");
    element.appendTo("body");
    vm = new TextBoxViewModel(new TextBoxModel(null, "Type text here"));
    ko.applyBindingsToNode(element[0], vm);
  }
});

QUnit.test("Placeholder is set", function(assert) {
  assert.equal(vm.placeholder(), element[0].placeholder);
});