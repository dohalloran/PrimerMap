var pm = require('./primermap');

var app = function(button, upload, div){
    pm.load(upload, div);
    button.addEventListener("click", function(){
        pm.render();
    });
}

module.exports = app;
