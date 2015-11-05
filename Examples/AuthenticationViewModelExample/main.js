require.config({
    baseUrl: "./../../scripts",
    paths: {
        jquery: "../libs/jquery-2.1.4.min",
        ko: "../libs/knockout-3.3.0",
        loader: "loader",
        // EVM paths
        // BindingHandlers: "../../scripts/BindingHandlers",
        // CompoundViewModels: "../../scripts/CompoundViewModels",
        // ElementViewModels: "../../scripts/ElementViewModels",
        // Extenders: "../../scripts/Extenders",
        // Models: "../../scripts/Models"
    }
});

require(["jquery", "ko", "loader","CompoundViewModels/AuthenticationViewModel"], 
    function($, ko, loader, AuthenticationViewModel) {
        var beforeLogin = function() { alert("_beforeLogin"); }
        var loginSuccess = function() { alert("_loginSuccess"); }
        var loginFailure = function() { alert("_loginFailure"); }
        var loginError = function() { alert("_loginError"); }
        
        var loginMethod = function (data, onSuccess, onFailure, onError) {                    
            alert("Login was clicked.");
            if (data.User === "user1" && data.Password === "pw")
                onSuccess();
            else if (data.User === "failure")
                onFailure();
            else if (data.User === "error")
                onError();
        };
        ko.applyBindings(new AuthenticationViewModel(loginMethod, beforeLogin, loginSuccess, loginFailure, loginError));
    }
);


