myApp.controller('characterController',['$http','$q','$routeParams','dataService',function($http,$q,$routeParams,dataService) {      
var main=this;
this.Character=[]; 
this.loadData = function() {
this.index=0;
index=$routeParams.characterid;
dataService.getCharacter(index).then(function successCallback(response) {
          
            main.Character = response.data;
          console.log(main.Character);
        },
        function errorCallback(response) {
          alert("some error occurred. Check the console.");
          console.log(response);
        });


};
this.loadData();



}]);