var ButtonModel = ButtonModel || function(text, clickMethod, canClickMethod, autoEnableButtonAfterOnClick) {
    var _self = this;
    _self.text = new StringProperty(text);
	_self.clickMethod = clickMethod || null;
	_self.canClickMethod = canClickMethod || null;
	if (autoEnableButtonAfterOnClick === null || autoEnableButtonAfterOnClick === undefined)
		autoEnableButtonAfterOnClick = true;
	_self.autoEnableButtonAfterOnClick = new TrueFalseProperty(autoEnableButtonAfterOnClick);
};