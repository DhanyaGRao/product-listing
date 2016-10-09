var express = require('express');
var app = express();
var falcor=require('falcor'); 
var falcorExpress = require('falcor-express');
var Router = require('falcor-router');
//var rx= require('rx');
var $ref=falcor.Model.ref;

var model= new falcor.Model({

cache:{

    "titleById":{
      234:{

        "name":"House of cards1",
        "rating":5
      }

    },

        "genreList":[

        {

          "name": "Recently watched",
          "titles":
          [
          $ref("titleById[234]")
          ]

        },

        {

          "name": "New Release",
          "titles":[
            
           $ref("titleById[234]")
           ]

        }

        ]
     }

});

//app.use(express.static("."));

//var $ref=falcor.Model.ref;
//var model= new falcor.Model();
app.use('/model.json', falcorExpress.dataSourceRoute(function (req, res) {
  // create a Virtual JSON resource with single key ("greeting")
  return model.asDataSource();
   

}));

// serve static files from current directory
app.use(express.static(__dirname + '/'));

var server = app.listen(3000);