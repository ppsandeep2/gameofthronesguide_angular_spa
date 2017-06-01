myApp.controller('houseController',['$http','$q','$routeParams','dataService',function($http,$q,$routeParams,dataService) {      
var main=this;
this.House=[]; 
this.loadData = function() {
this.index=0;
index=$routeParams.houseid;
dataService.getHouse(index).then(function successCallback(response) {
          
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