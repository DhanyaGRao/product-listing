
    var $ref=falcor.Model.ref;
    var model= new falcor.Model({ 
    source: new falcor.HttpDataSource('./model.json')

  })

     //model.setValue('genreList[0].titles[0].rating',5).
     //then(function(value){
      var id=9780044499565

      
      model.getValue(

 // ["genreList",{from:index,to:index+1},"titles",0,"name"]).
    ["worksById",id,"Title","TitleText"]).
      //"genreList[0].title[0].name"
      then(function(value){
       console.log(value)
      // document.write(value)
        // console.log(JSON.stringify(json,null,2))

      })

      var id=9780044488088
      model.getValue(

 // ["genreList",{from:index,to:index+1},"titles",0,"name"]).
    ["worksById",id,"Title","TitleText"]).
      //"genreList[0].title[0].name"
      then(function(value){
       console.log(value)
      // document.write(value)
        // console.log(JSON.stringify(json,null,2))

      })

      var id=9780012752159
      model.getValue(

 // ["genreList",{from:index,to:index+1},"titles",0,"name"]).
    ["worksById",id,"Title","TitleText"]).
      //"genreList[0].title[0].name"
      then(function(value){
       console.log(value)
     //  document.write(value)
        // console.log(JSON.stringify(json,null,2))

      })

      var id=9780000001306
      model.getValue(

 // ["genreList",{from:index,to:index+1},"titles",0,"name"]).
    ["worksById",id,"Title","TitleText"]).
      //"genreList[0].title[0].name"
      then(function(value){
       console.log(value)
      //document.write(value)
        // console.log(JSON.stringify(json,null,2))

      })
      var id=9780000001962
      model.getValue(

 // ["genreList",{from:index,to:index+1},"titles",0,"name"]).
    ["worksById",id,"Title","TitleText"]).
      //"genreList[0].title[0].name"
      then(function(value){
       console.log(value)
       //document.write(value)
        // console.log(JSON.stringify(json,null,2))

      })
      
      //document.write(json.response)
    //  console.log(JSON.stringify(json,null,2))
    //  document.write(JSON.stringify(json,null,2))
      //console.log(value)
     // document.write(value);

   //  })
   