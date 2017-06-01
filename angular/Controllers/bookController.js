myApp.controller('bookController',['$http','$q','$routeParams','gotService',function($http,$q,$routeParams,gotService) {      
var main=this;
this.Book=[]; 
this.loadData = function() {
this.index=0;
index=$routeParams.bookid;
index++;
gotService.getBook(index).then(function successCallback(response) {
          
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