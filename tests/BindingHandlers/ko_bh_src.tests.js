QUnit.module("TextBoxViewModel inherits base element", {
  beforeEach: function() {
    element = $("<img alt='sword'/>");
    element.appendTo("body");
    var Vm = function(src) {
        _self = this;
        _self.src = ko.observable(src);
    };
    vm = new Vm("./sword.png");
    ko.applyBindingsToNode(element[0], vm);
  }
});

QUnit.test("Attribute 'src' is set", function(assert) {
  assert.equal(vm.src(), element[0].getAttribute('src'));
});