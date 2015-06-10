QUnit.module("AuthenticationViewModel calls events", { 
    beforeEach: function() {
            beforeLoginWasExecuted = false;
            var beforeLogin = function() { beforeLoginWasExecuted = true; }
            loginSuccessWasExecuted = false;
            var loginSuccess = function() { loginSuccessWasExecuted = true; }
            loginFailureWasExecuted = false;
            var loginFailure = function() { loginFailureWasExecuted = true; }
            loginErrorWasExecuted = false;
            var loginError = function() { loginErrorWasExecuted = true; }            
            loginMethodWasExecuted = false;
            var loginMethod = function (data, onSuccess, onFailure, onError) {
                loginMethodWasExecuted = true;
                if (data.User === "user1" && data.Password === "pw")
                    onSuccess();
                else if (data.User === "failure")
                    onFailure();
                else if (data.User === "error")
                    onError();
            };
            vm = new AuthenticationViewModel(loginMethod, beforeLogin, loginSuccess, loginFailure, loginError);
        }
    }
);

QUnit.test("Successful login calls beforeLogin, loginMethod, and loginSuccess()", function(assert) {
    vm.user.text("user1");
    vm.password.text("pw");
    vm.submitButton.onClick();
    assert.expect(3)
    assert.ok(beforeLoginWasExecuted);
    assert.ok(loginMethodWasExecuted);
    assert.ok(loginSuccessWasExecuted);
});

QUnit.test("Failed login calls beforeLogin, loginMethod, and loginFailure()", function(assert) {
    vm.user.text("failure");
    vm.password.text("badpw"); // cannot be empty
    vm.submitButton.onClick();
    assert.expect(3)
    assert.ok(beforeLoginWasExecuted);
    assert.ok(loginMethodWasExecuted);
    assert.ok(loginFailureWasExecuted);
});

QUnit.test("Errored login calls beforeLogin, loginMethod, and loginError()", function(assert) {
    vm.user.text("error");
    vm.password.text("badpw"); // cannot be empty
    vm.submitButton.onClick();
    assert.expect(3)
    assert.ok(beforeLoginWasExecuted);
    assert.ok(loginMethodWasExecuted);
    assert.ok(loginErrorWasExecuted);
});

QUnit.module("AuthenticationViewModel doesn't fail when only login method is defined", { 
    beforeEach: function() {   
            loginMethodWasExecuted = false;
            var loginMethod = function (data) {
                loginMethodWasExecuted = true;
            };
            vm = new AuthenticationViewModel(loginMethod);
        }
    }
);

QUnit.test("Successful login calls beforeLogin, loginMethod, and loginSuccess()", function(assert) {
    vm.user.text("user1");
    vm.password.text("pw");
    vm.submitButton.onClick();
    assert.ok(loginMethodWasExecuted);
});

QUnit.module("AuthenticationViewModel data tests", { 
    beforeEach: function() {   
            loginMethodWasExecuted = false;
            loginData = null;
            var loginMethod = function (data, onSuccess, onFailure, onError) {
                loginData = data;
            };
            vm = new AuthenticationViewModel(loginMethod);
        }
    }
);

QUnit.test("Successful login calls beforeLogin, loginMethod, and loginSuccess()", function(assert) {
    vm.user.text("user1");
    vm.password.text("pw");
    vm.submitButton.onClick();
    assert.expect(2);
    assert.equal("user1", loginData.User);
    assert.equal("pw", loginData.Password);
});
