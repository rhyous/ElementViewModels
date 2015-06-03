var BaseElement = function (child) {
  var _self = this;
  _self.init = function (child) {
    child.accesskey = ko.observable();
    child.class = ko.observable();
    child.direction = ko.observable();
    child.draggable = ko.observable();
    child.dropzone = ko.observable();
    child.hidden = ko.observable();
    child.id = ko.observable();
    child.lang = ko.observable();
    child.spellcheck = ko.observable();
    child.style = ko.observable();
    child.tabindex = ko.observable();
    child.title = ko.observable();
    child.translate = ko.observable();
  };
  _self.init(child);
}

var BaseTextElement = function (text, child) {
  var _self = this;
  _self.init = function (child) {
      BaseElement(child);
      child.text = ko.observable(text);
    };
  _self.init(child);
}
