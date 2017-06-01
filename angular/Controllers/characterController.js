myApp.controller('characterController',['$http','$q','$routeParams','gotService',function($http,$q,$routeParams,gotService) {      
var main=this;
this.Character=[]; 
this.loadData = function() {
this.index=0;
index=$routeParams.characterid;
index++;
gotService.getCharacter(index).then(function successCallback(response) {
          
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