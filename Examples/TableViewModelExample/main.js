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
        // ElementModels: "../../scripts/Models"
    }
});

var deps = ["ko",
            "loader",
            "ElementModels/StringColumn", 
            "ElementModels/DateColumn",
            "ElementViewModels/TableViewModel"];
require(deps, function(ko, loader, StringColumn, DateColumn, TableViewModel) {
    var columns = [new StringColumn(0, "First Name"), 
                   new StringColumn(1, "Last Name"),
                   new DateColumn(2, "Date of Birth")];
    var rows = [["Johnny","Johns", "1/1/1992"],
                ["Billy","Bills", "7/21/1990"],
                ["Franky","Franks", "12/8/1989"],
                ["Linda","Linderson", "4/30/2001"]]
    var caption = "Contact List";
    var table = new TableViewModel(columns, rows, caption);
    
    ko.applyBindings(table);
});


