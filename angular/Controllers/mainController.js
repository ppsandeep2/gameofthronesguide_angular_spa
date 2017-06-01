myApp.controller('mainController',['$http','$q','$routeParams','dataService',function($http,$q,$routeParams,dataService) {      
var main=this
this.apiData=new Array();
this.showbookkey=1;
this.showcharkey=0;
this.showhousekey=0;
this.showbooktab=1;
this.showchartab=0;
this.showhousetab=0;
this.Books=[];
this.Characters=[] ;
this.Houses=[] ;
this.cardHeading="";
this.maxcharpage=10; 
this.maxhousepage=10; 
this.loadData = function() {
for (var i = 1; i < main.maxcharpage; i++) {
dataService.getCharacters([i]).then(function successCallback(response) {
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
dataService.getHouses([i]).then(function successCallback(response) {
if (response.data.length > 0) {
main.Houses.push.apply(main.Houses, response.data);
}
},
function errorCallback(response) {
alert("some error occurred. Check the console.");
console.log(response);
});
} //end for loop
dataService.getBooks().then(function successCallback(response) {
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
main.showbooktab=1;
main.showchartab=0;
main.showhousetab=0;
$('#book').focus();
}     
this.showcharacters =function(){
main.showbookkey=0;
main.showcharkey=1;
main.showhousekey=0;
main.showbooktab=0;
main.showchartab=1;
main.showhousetab=0;
$('#Characters').focus();
}  
this.showhouses =function(){
main.showbookkey=0;
main.showcharkey=0;
main.showhousekey=1;
main.showbooktab=0;
main.showchartab=0;
main.showhousetab=1;
$('#Houses').focus();
}  
}]);