myApp.controller('bookController',['$http','$q','$routeParams','dataService',function($http,$q,$routeParams,dataService) {      
var main=this;
this.Book=[]; 
this.loadData = function() {
this.index=0;
index=$routeParams.bookid;
dataService.getBook(index).then(function successCallback(response) {
          
            main.Book = response.data;
          console.log(main.Book);
        },
        function errorCallback(response) {
          alert("some error occurred. Check the console.");
          console.log(response); 
        });


};
this.loadData();





}]);