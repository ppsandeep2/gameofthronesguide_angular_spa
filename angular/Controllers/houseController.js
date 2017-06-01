myApp.controller('houseController',['$http','$q','$routeParams','gotService',function($http,$q,$routeParams,gotService) {      
var main=this;
this.House=[]; 
this.loadData = function() {
this.index=0;
index=$routeParams.houseid;
index++;
gotService.getHouse(index).then(function successCallback(response) {
          
            main.House = response.data;
          console.log(main.House);
        },
        function errorCallback(response) {
          alert("some error occurred. Check the console.");
          console.log(response);
        });


};
this.loadData();



}]);