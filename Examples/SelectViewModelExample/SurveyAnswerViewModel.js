var deps = ["ko",
            "ElementViewModels/OptionViewModel",
            "ElementViewModels/SelectViewModel"]
loader("SurveyAnswerViewModel", deps,
    function(ko, OptionViewModel, SelectViewModel){
        var SurveyAnswerViewModel = function () {
            var self = this;
             
            self.list = [];
            self.list.push(new OptionViewModel("Good", 10));
            self.list.push(new OptionViewModel("Average", 5));
            self.list.push(new OptionViewModel("Poor", 1));
            self.defaultValue = 10;
            self.selectGroup1 = new SelectViewModel(self.list, self.defaultValue);                       
             
            self.canClick = ko.computed( function() {
                return self.selectGroup1.selectedValue() != "";
            }, self);
            
            self.submitClick = function(){
                alert("You selected: " + self.selectGroup1.selectedText());
            }
            
            self.resetClick = function(){
                self.selectGroup1.clear();
            }
        };
        return SurveyAnswerViewModel;
    }
);