myApp.service('gotService', function apiFactory($http) {

  var baseUrl = 'https://anapioficeandfire.com/api';
  var main=this;

 main.getBooks = function() {
    return $http.get(baseUrl + '/books?page=1&pageSize=50');}
  main.getBook = function(bookid) {
    return $http.get(baseUrl + '/books/' + bookid)

  }  
  
 main.getCharacter = function(characterid) {
    return $http.get(baseUrl + '/characters/' + characterid)

  }

  main.getCharacters = function(pageno) {
    return $http.get(baseUrl + '/characters?page=' + pageno + '&pageSize=50')
  }


  main.getHouse = function(houseid) {
    return $http.get(baseUrl + '/houses/' + houseid)

  }
 main.getHouses = function(pagenoh) {
    return $http.get(baseUrl + '/houses?page=' + pagenoh + '&pageSize=50')

  }
 





});