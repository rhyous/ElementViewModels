REM Binding Handlers
jsmin.exe < ..\BindingHandlers\knockout.areaRowsColumns.js > evm.min.js
jsmin.exe < ..\BindingHandlers\knockout.boundHtml.js >> evm.min.js
jsmin.exe < ..\BindingHandlers\knockout.chardin.js >> evm.min.js
jsmin.exe < ..\BindingHandlers\knockout.datepicker.js >> evm.min.js
jsmin.exe < ..\BindingHandlers\knockout.dragndrop.js >> evm.min.js
jsmin.exe < ..\BindingHandlers\knockout.enterkey.js >> evm.min.js
jsmin.exe < ..\BindingHandlers\knockout.id.js >> evm.min.js
jsmin.exe < ..\BindingHandlers\knockout.maxlength.js >> evm.min.js
jsmin.exe < ..\BindingHandlers\knockout.placeholder.js >> evm.min.js
jsmin.exe < ..\BindingHandlers\knockout.slideToggle.js >> evm.min.js
jsmin.exe < ..\BindingHandlers\knockout.src.js >> evm.min.js
jsmin.exe < ..\BindingHandlers\knockout.start.js >> evm.min.js
jsmin.exe < ..\BindingHandlers\knockout.type.js >> evm.min.js

REM Element Models
jsmin.exe < ..\Models\Property.js >> evm.min.js
jsmin.exe < ..\Models\TextBoxModel.js >> evm.min.js
jsmin.exe < ..\Models\TextAreaModel.js >> evm.min.js
jsmin.exe < ..\Models\ButtonModel.js >> evm.min.js
jsmin.exe < ..\Models\RadioButtonModel.js >> evm.min.js
jsmin.exe < ..\Models\ColumnModel.js >> evm.min.js

REM Element ViewModels
jsmin.exe < ..\ElementViewModels\BaseElement.js >> evm.min.js
jsmin.exe < ..\ElementViewModels\ButtonViewModel.js >> evm.min.js
jsmin.exe < ..\ElementViewModels\ElementViewModel.js >> evm.min.js
jsmin.exe < ..\ElementViewModels\ListViewModel.js >> evm.min.js
jsmin.exe < ..\ElementViewModels\OptionViewModel.js >> evm.min.js
jsmin.exe < ..\ElementViewModels\RadioButtonViewModel.js >> evm.min.js
jsmin.exe < ..\ElementViewModels\SelectViewModel.js >> evm.min.js
jsmin.exe < ..\ElementViewModels\TableViewModel.js >> evm.min.js
jsmin.exe < ..\ElementViewModels\TextBoxViewModel.js >> evm.min.js
jsmin.exe < ..\ElementViewModels\TextAreaViewModel.js >> evm.min.js

REM Compound ViewModels
jsmin.exe < ..\CompoundViewModels\AreYouSureViewModel.js >> evm.min.js
jsmin.exe < ..\CompoundViewModels\AuthenticationViewModel.js >> evm.min.js
jsmin.exe < ..\CompoundViewModels\TextBoxAndButtonViewModel.js >> evm.min.js
jsmin.exe < ..\CompoundViewModels\TextAreaAndButtonViewModel.js >> evm.min.js
jsmin.exe < ..\CompoundViewModels\TextAreaSelectAndButtonViewModel.js >> evm.min.js
