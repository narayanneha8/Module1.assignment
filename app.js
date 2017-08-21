(function(){
  'use strict';

  angular.module('LunchCheck', [])
  .controller('MyController', MyController);

  MyController.inject = ['$scope'];
  function MyController($scope){
      $scope.name = "";
      $scope.totalSize = 0;
      $scope.message = "";
      $scope.checkLength = function(){
        var comma = ',';
        var length = splitString($scope.name, comma);
        $scope.totalSize = length;
      }

      $scope.checkResult = function(){
        var output = getResult($scope.totalSize);
        $scope.message =  output;
      }
    }

function getResult(size){
  if(size==0){
    return "Please Enter Data First";
  }else if (size <= 3 && size !=0) {
    return "Enjoy !";
  }else
  return "Too Much !";
}

function splitString(string, separator){
  var arrayOfItems = string.split(separator);
  var sizeOfItems = arrayOfItems.length;
  return sizeOfItems;
}

})();
