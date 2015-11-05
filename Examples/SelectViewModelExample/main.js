require.config({
    baseUrl: "../../scripts",
    paths: {
        jquery: "../libs/jquery-2.1.4.min",
        ko: "../libs/knockout-3.3.0",
        loader: "loader",
        SurveyAnswerViewModel: "../Examples/SelectViewModelExample/SurveyAnswerViewModel"
        // EVM paths
        // BindingHandlers: "../../scripts/BindingHandlers",
        // CompoundViewModels: "../../scripts/CompoundViewModels",
        // ElementViewModels: "../../scripts/ElementViewModels",
        // Extenders: "../../scripts/Extenders",
        // Models: "../../scripts/Models"
    }
});

require(["ko", "loader", "SurveyAnswerViewModel"], function(ko, loader, SurveyAnswerViewModel) {
    ko.applyBindings(new SurveyAnswerViewModel());
});


