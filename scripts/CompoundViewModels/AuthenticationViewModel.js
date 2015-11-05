// Note: Supports loginMethod, beforelogin, and for ajax supports
var deps = ["ko",
            "Models/ButtonModel",
            "ElementViewModels/ButtonViewModel",
            "Models/TextBoxModel",
            "ElementViewModels/TextBoxViewModel",
            "BindingHandlers/ko_bh_enterkey",
            "BindingHandlers/ko_bh_placeholder",
           ];             
loader("AuthenticationViewModel", deps,
    function(ko, ButtonModel, ButtonViewModel, TextBoxModel, TextBoxViewModel){
        var AuthenticationViewModel = function (loginMethod, beforeLogin, onSuccess, onFailure, onError) {
            var _self = this;
            var _defaultUserPlaceholder = "Please enter your username . . .";
            var _defaultPasswordPlaceholder = "Please enter your password . . .";
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

            var _loginButtonClick = function () {
                if (!_loginButtonCanClick()) { return; }
                _self.beforeLogin();
                _loginMethod({ "User": _self.user.text().trim(), "Password": _self.password.text() }, _self.onSuccess, _self.onFailure, _self.onError);
            };
            _self.user = new TextBoxViewModel(new TextBoxModel("", _defaultUserPlaceholder, _loginButtonClick));
            _self.password = new TextBoxViewModel(new TextBoxModel("", _defaultPasswordPlaceholder, _loginButtonClick));
            
            var _loginButtonCanClick = ko.computed(function () {
                return _self.user !== null && !isNullOrWhitespace(_self.user.text()) && _self.password != null && !isNullOrWhitespace(_self.password.text());
            }, _self);
            
            _self.submitButton = new ButtonViewModel(new ButtonModel("Login", _loginButtonClick, _loginButtonCanClick, true));
        };
        return AuthenticationViewModel;
    }
);