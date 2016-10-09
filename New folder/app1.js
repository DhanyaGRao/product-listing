 
var falcorExpress = require('falcor-express');
var Router = require('falcor-router');

var express = require('express');
var app = express();
//var $ref=falcor.Model.ref;
//var model= new falcor.Model();
app.use('/model.json', falcorExpress.dataSourceRoute(function (req, res) {
  // create a Virtual JSON resource with single key ("greeting")
  return new Router([
    {
      // match a request for the key "greeting"    
      route: "genreList",
      // respond with a PathValue with the value of "Hello World."
      get: function() {
       return {path:["genreList"], value: "My new world"};
      }
   


    }
   //return model.asDataSource();
  ]);
}));

// serve static files from current directory
app.use(express.static(__dirname + '/'));

var server = app.listen(3000);