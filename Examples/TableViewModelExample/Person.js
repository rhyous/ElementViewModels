loader("Person", ["ElementModels/StringProperty"],
    function(StringProperty){
        var Person = function(fName, lName, dob) {
            var _self = this;
            _self.firstName = new StringProperty(fName);
            _self.lastName = new StringProperty(lName);
            _self.dateOfBirth = new Date(dob);
        };
        return Person;
    }
);