require.config({
    baseUrl: "../../scripts",
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

require(["jquery", "ko", "loader", "CompoundViewModels/AreYouSureViewModel"], function($, ko, loader, AreYouSureViewModel) {
    var text = "Are you sure?";
    var onYesClick = function() { alert("You clicked Yes."); }
    var onNoClick = function() { alert("You clicked No."); }
    var areYouSure = new AreYouSureViewModel(text, onYesClick, onNoClick);
    ko.applyBindings(areYouSure);
});


