var AuthenticationViewModel = AuthenticationViewModel = function (loginMethod, beforeLogin, onSuccess, onFailure, onError) {
	var _self = this;
	var isNullOrWhitespace = function( str ) {
	  return !str || str.replace(/\s/g, '').length < 1;
	}
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
    	
	_self.user = new TextBoxViewModel('', _loginButtonClick, 'Please enter your username');
	
	_self.password = new TextBoxViewModel('',_loginButtonClick, 'Please enter your password');

	var _loginButtonCanClick = ko.computed(function() {
		return _self.user !== null && !isNullOrWhitespace(_self.user.text()) && _self.password != null && !isNullOrWhitespace(_self.password.text())
	}, _self);	
	
	var _loginButtonClick = function () {
		if (!_loginButtonCanClick()) { return; }
		_self.beforeLogin();
        _loginMethod(onSuccess, onFailure, onError);
	};
	
	_self.submitButton = new ButtonViewModel("Login", _loginButtonClick, _loginButtonCanClick, false);
}    