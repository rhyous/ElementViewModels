# ElementViewModels
ViewModels for html elements. Addon to enhance knockout.js.

In Model-View-ViewModel, the idea is to have a ViewModel for your control. Every single html element is a small control. When you combine html elements, you are making a Compound Control. If a standard ViewModel existed for each html control, then making compound controls can be quick and easy, yet feature rich.

# Terms #
MVVM - Model, View, ViewModel. A design-pattern for separation of concerns between the UI and the code.
Model - Also called a data model. It is a repestentation of something in code.
View - A page or control that is visually seen and may or may not be interacted with.
UI Control - A UI element
Compound UI Control - A control made up of one or more smaller controls
Knockout.js - A framework that supports MVVM for JavaScript (code) and Html (view).

# Element ViewModels #
BaseClassTemplate - A template for base classes in javascript. (Does not use protoypal inheritance.)
BaseElement - The base class for all elements. All elements should inherit this.
ButtonViewModel - 
TextBoxViewModel - For use with text input.
TextAreaViewModel - Inherits TextBoxViewModel.
