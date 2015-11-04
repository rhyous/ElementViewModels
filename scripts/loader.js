(function(define){    
    var load = function(){    
        loadModule = function(define, moduleName, deps, params, load){     
            if ( typeof define === "function" && define.amd ) {
                // Export as module
                define(moduleName, deps, load.apply(null, params));
            } else {
                // Add to global namespace
                var nonmodule = load.apply(null, params);
                if (nonmodule) {
                    window[moduleName] = nonmodule;
                }
            }
        };
    }
    if ( typeof define === "function" && define.amd ) {
        // Export module
        define("loader", null, load());
    } else {
        // Add to global namespace
        load();        
    }
    return 
}(window.define))