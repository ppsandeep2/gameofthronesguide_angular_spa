myApp.controller('mainController',['$http','$q','$routeParams','gotService',function($http,$q,$routeParams,gotService) {      
   
     var main=this
     
this.apiData=new Array();
this.showbookkey=1;
this.showcharkey=0;
this.showhousekey=0;
this.Books=[];
this.Characters=[] ;
this.Houses=[] ;
this.cardHeading="";
   this.maxcharpage=3; 
      this.maxhousepage=3; 

     this.loadData = function() {
         for (var i = 1; i < main.maxcharpage; i++) {
      gotService.getCharacters([i]).then(function successCallback(response) {
          if (response.data.length > 0) {
            main.Characters.push.apply(main.Characters, response.data);
          }
        },
        function errorCallback(response) {
          alert("some error occurred. Check the console.");
          console.log(response);
        });
    } //end for loop
     for (var i = 1; i < main.maxhousepage; i++) {
      gotService.getHouses([i]).then(function successCallback(response) {
          if (response.data.length > 0) {
            main.Houses.push.apply(main.Houses, response.data);
          }
        },
        function errorCallback(response) {
          alert("some error occurred. Check the console.");
          console.log(response);
        });
    } //end for loop

      gotService.getBooks().then(function successCallback(response) {
          if (response.data.length > 0) {
            main.Books.push.apply(main.Books, response.data);
          }
        },
        function errorCallback(response) {
          alert("some error occurred. Check the console.");
          console.log(response);
        });

main.apiData=[
   {key:"Book",Value: main.Books},
   {key:"Character",Value:  main.Characters},
   {key:"House",Value: main.Houses}

  ];
console.log(main.apiData);

} // end load all Data
this.loadData();

   this.showbooks =function(){

 main.showbookkey=1;
      main.showcharkey=0;
    main.showhousekey=0;
   
   $('#book').focus();
   
   }     


     this.showcharacters =function(){

 main.showbookkey=0;
      main.showcharkey=1;
    main.showhousekey=0;
   $('#Characters').focus();
   }  

       this.showhouses =function(){

 main.showbookkey=0;
      main.showcharkey=0;
    main.showhousekey=1;
  $('#Houses').focus();
   }  


   




    }]);


