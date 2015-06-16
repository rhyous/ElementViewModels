// Requirements:
//  knockout, BaseElement, TextBoxModel, TextBoxViewModel, ButtonModel, ButtonViewModel
// Conditional requirement:
//  knockout.enterkey.js - needed if the html control this bind to is not inside a form and you
//                         want the enter key to work when the textbox has focus
//  knockout.placeholder.js - needed if you want to bind the placeholder with easy syntax
//
// Note: Supports loginMethod, beforelogin, and for ajax supports 
var AuthenticationViewModel = AuthenticationViewModel = function (loginMethod, beforeLogin, onSuccess, onFailure, onError) {
    var _self = this;
    var defaultUserPlaceholder = "Please enter your username . . .";
    var defaultPasswordPlaceholder = "Please enter your password . . .";
    var isNullOrWhitespace = function (str) {
        return !str || str.replace(/\s/g, '').length < 1;
    };
    var _loginMethod = loginMethod;

    _self.beforeLogin = (beforeLogin) ? beforeLogin : function () { return true; };

    _self.onSuccess = (onSuccess) ? function (data) {
        onSuccess(data);
        _self.submitButton.isRunning(false);
    } : function (data) { return data; };

    _self.onFailure = (onFailure) ? function (errMsg) {
        onFailure(errMsg);
        _self.submitButton.isRunning(false);
    } : function (errMsg) { return errMsg; };

    _self.onError = (onError) ? function (errMsg) {
        onError(errMsg);
        _self.submitButton.isRunning(false);
    } : _self.onFailure; // If onError is null, use onFailure

    _self.user = new TextBoxViewModel(new TextBoxModel("", defaultUserPlaceholder));
    _self.password = new TextBoxViewModel(new TextBoxModel("", defaultPasswordPlaceholder));

    var _loginButtonCanClick = ko.computed(function () {
        return _self.user !== null && !isNullOrWhitespace(_self.user.text()) && _self.password != null && !isNullOrWhitespace(_self.password.text());
    }, _self);

    var _loginButtonClick = function () {
        if (!_loginButtonCanClick()) { return; }
        _self.beforeLogin();
        _loginMethod({ "User": _self.user.text(), "Password": _self.password.text() }, _self.onSuccess, _self.onFailure, _self.onError);
    };
    _self.submitButton = new ButtonViewModel(new ButtonModel("Login", _loginButtonClick, _loginButtonCanClick, false));
}