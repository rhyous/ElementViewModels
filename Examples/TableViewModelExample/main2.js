require.config({
    baseUrl: "../../scripts",
    paths: {
        jquery: "../libs/jquery-2.1.4.min",
        ko: "../libs/knockout-3.3.0",
        loader: "loader",
        Person: "../Examples/TableViewModelExample/Person"
        // EVM paths
        // BindingHandlers: "../../scripts/BindingHandlers",
        // CompoundViewModels: "../../scripts/CompoundViewModels",
        // ElementViewModels: "../../scripts/ElementViewModels",
        // Extenders: "../../scripts/Extenders",
        // Models: "../../scripts/Models"
    }
});

var deps = ["ko",
            "loader",
            "Models/StringColumn", 
            "Models/DateColumn",
            "Person",
            "ElementViewModels/TableViewModel"];
require(deps, function(ko, loader, StringColumn, DateColumn, Person, TableViewModel) {
    var columns = [new StringColumn(0, "First Name", "firstName.get()"), 
                   new StringColumn(1, "Last Name", "lastName.get()"),
                   new DateColumn(2, "Date of Birth", "dateOfBirth")];
    var rows = [new Person("Johnny","Johns", "Jan 1, 1992"),
                new Person("Billy","Bills", "July 21, 1990"),
                new Person("Franky","Franks", "Dec 1, 1989"),
                new Person("Linda","Linderson", "Apr 30, 2001")];
    var caption = "Contact List";
    var table = new TableViewModel(columns, rows, caption);

    ko.applyBindings(table);
});


