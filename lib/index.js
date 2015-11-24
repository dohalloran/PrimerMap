var pm = require('./primermap');

var app = function(button, upload){
    pm.load(upload);
    button.addEventListener("click", function(){
        pm.render();
    });
}

module.exports = app;
