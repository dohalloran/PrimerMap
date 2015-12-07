var pm = require('./primermap');

var app = function(button){
    button.addEventListener("click", function(){
        pm.render();
    });
}

module.exports = app;
