var dataArray =[];

function dataController1($http,$timeout){

  var vm=this;
  vm.title="Product Titles";
  vm.data=[];
  var i=0 

    var $ref=falcor.Model.ref;
    var model= new falcor.Model({ 
    source: new falcor.HttpDataSource('./model.json')

  })


  function getValue(id)

  {

   model.getValue(
      ["worksById",id,"Title","TitleText"]).
          then(function(value){
    //   console.log(value)
          vm.data[i]=value
          i=i+1
          dataArray.push(value);


      //return dataArray
      // console.log(JSON.stringify(json,null,2))

      })

  } //end of function getValue()

   
      var id=9780044499565
      getValue(id);
 
      var id=9780044488088
      getValue(id);
       
      var id=9780012752159
      getValue(id);
      
      var id=9780000001306
      getValue(id);
       
      var id=9780000001962
      getValue(id);
        
      var id=9780000001979
      getValue(id);
     
      var id=9780080011035
      getValue(id);
      
      var id=9780080019727
      getValue(id);
      
      var id=9780080022994
      getValue(id);
      
      var id=9780080025971
      getValue(id);
      
      var id=9780080028644
      getValue(id);
      
      var id=9780080027920
      getValue(id);
      
      var id=9780030031298
      getValue(id);
      
      var id=9780080019758
      getValue(id);
      
      var id=9780030525810
      getValue(id);
      
      var id=9780030595424
      getValue(id);
      
      var id=9780030613418
      getValue(id);
      
      var id=9780030613517
      getValue(id);
      
      var id=9780030637025
      getValue(id);
      
      var id=9780030640117
      getValue(id);
     
      var id=9780039102944
      getValue(id);
      
      var id=9780039103620
      getValue(id);
      
      var id=9780039105167
      getValue(id);
      
      var id=9780039105983
      getValue(id);
     
      var id=9780039229184
      getValue(id);
      
      
      $timeout(displayStatus, 1000);

      function displayStatus() 
      {
       console.log("All data loaded : entries : " + dataArray.length);
       console.log(dataArray)
      }

   }