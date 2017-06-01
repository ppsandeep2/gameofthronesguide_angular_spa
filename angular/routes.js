//var myApp = angular.module('footballApp', ['ngRoute']); 

myApp.config(['$routeProvider', function($routeProvider){
    $routeProvider.when('/',{
            // location of the template
            templateUrl     : 'views/index-view.html',
            // Which controller it should use 
            controller      : 'mainController',
            // what is the alias of that controller.
            controllerAs    : 'mainC'
        })
         
       .when('/book/:bookid',{
            // location of the template
            templateUrl     : 'views/book-detail-view.html',
            // Which controller it should use 
            controller      : 'bookController',
            // what is the alias of that controller.
            controllerAs    : 'bookC'
        })
         .when('/character/:characterid',{
            // location of the template
            templateUrl     : 'views/character-detail-view.html',
            // Which controller it should use 
            controller      : 'characterController',
            // what is the alias of that controller.
            controllerAs    : 'CharacterC'
        })
            .when('/house/:houseid',{
            // location of the template
            templateUrl     : 'views/house-detail-view.html',
            // Which controller it should use 
            controller      : 'houseController',
            // what is the alias of that controller.
            controllerAs    : 'houseC'
        })
    
  
    

        .otherwise(
            {
                //redirectTo:'/'
                template   : '<br><br><br><br><br><h3 class = text-center style="color:white">404 page not found</h3>'
            }
        );
}]);