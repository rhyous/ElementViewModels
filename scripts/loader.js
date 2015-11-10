var loader = function (objName, deps, load) {
    var map = {
        jquery: "$"
    };
    if (typeof define === 'function' && define.amd) {
        // Export as module
        define(deps, load);
    } else {
        // Export as Browser global
        var params = [];
        for (var i = 0; i < deps.length; ++i) {
            var split = deps[i].split("/");
            var depName = split[split.length - 1];
            depName = map[depName] || depName;
            params.push(window[depName]);
        }
        // Load it to global space unless already loaded.
        window[objName] = window[objName] || load.apply(null, params);
    }
};

if (typeof define === 'function' && define.amd) {
    define(function(){ return loader; });
}
