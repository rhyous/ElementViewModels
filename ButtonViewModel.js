var ButtonViewModel = function(text, clickMethod, canClickMethod, autoEnableButtonAfterOnClick, child) {
  // Private
  var _self = this;
  BaseElement(_self);
  var _text = text;
  var _clickMethod = clickMethod;
  var _canClickMethod = canClickMethod;
  var _autoEnableButtonAfterOnClick = (autoEnableButtonAfterOnClick !== null &&autoEnableButtonAfterOnClick !== undefined ) ? autoEnableButtonAfterOnClick : true;
  
  _self.init = function(obj) {

    // Public
    obj.text = ko.observable(_text);
    obj.autoEnableButtonAfterOnClick = ko.observable(_autoEnableButtonAfterOnClick);
    obj.onClick = (_clickMethod) ? function() {
      if (!obj.canClick())
        return;
      obj.isRunning(true);
      _clickMethod();
      if (obj.autoEnableButtonAfterOnClick())
        obj.isRunning(false);
    } : function() {
      return true;
    };

    obj.isRunning = ko.observable(false);


    obj.canClick = ko.computed(function() {
      return !obj.isRunning() && (!(_canClickMethod) || _canClickMethod());
    });
    obj.class = ko.observable();
  }
  _self.init(_self);
  if (child) { _self.init(child); }
};
