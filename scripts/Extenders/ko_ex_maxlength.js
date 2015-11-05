loader("ko_ex_maxlength", ["ko"], function(ko){
        ko.extenders.maxLength = function (target, maxLength) {
            var result = ko.computed({
                read: target,
                write: function (val) {
                    if (maxLength > 0) {
                        if (val.length > maxLength) {
                            var limitedVal = val.substring(0, maxLength);
                            if (target() === limitedVal) {
                                target.notifySubscribers();
                            }
                            else {
                                target(limitedVal);
                            }
                            result.css("errorborder");
                            setTimeout(function () { result.css(""); }, 500);
                        }
                        else { target(val); }
                    }
                    else { target(val); }
                }
            }).extend({ notify: 'always' });
            result.css = ko.observable();
            result(target());
            return result;
        };
    }
);