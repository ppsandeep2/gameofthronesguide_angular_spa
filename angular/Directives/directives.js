myApp.directive('bookView', function() {
  var index1=1;
 return{
 restrict: "E",
   templateUrl: "views/book-view.html",

scope:{

	book: "=" ,
	index: "="

},
 controller  :  function($scope){
   var ind=$scope.index;
   $scope.cardHeading = " #" + ind++;

 }

 
} 

});
myApp.directive('characterView', function() {
 var index2=1;
 return{
 restrict: "E",
   templateUrl: "views/character-view.html",

scope:{

	character: "=" ,
	index: "="


},
 controller  :  function($scope){
   
  var ind2=$scope.index;
   $scope.cardHeading = " #" + ind2++;

 }

 
} 

});

myApp.directive('houseView', function() {
 var index3=1;
 return{
 restrict: "E",
   templateUrl: "views/house-view.html",

scope:{

	house: "=" ,
	index: "="


},
 controller  :  function($scope){
   
   var ind3=$scope.index;
   $scope.cardHeading = " #" + ind3++;

 }

 
} 

});


