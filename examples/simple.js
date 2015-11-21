var primermap = require("primermap");

var runBtn = document.getElementById("loader");
var fileUpload = document.getElementById("fileInput");
var display = document.getElementById("fileDisplayArea");

primermap(runBtn, fileUpload, display);
