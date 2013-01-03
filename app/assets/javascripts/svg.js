var tessellations = [
  "cm","cmm","p1","p2","p3","p3m1","p4","p4g","p4m","p6","p6m",
  "p31m","pg","pgg","pm","pmg","pmm"
]

angular.module('SvgApp', [])
  .config(['$routeProvider', function($routeProvider){
  for (tess in tessellations){
    var t = tessellations[tess]
    $routeProvider.when("/"+t,{templateUrl:"/tessellation/"+t+".html"})
  }
}])

function SvgCtl($scope,$route,$location){

  $scope.tessellations = tessellations;

  $scope.current_tess = function(item){
    return $location.path().substring(1) == item
  }


}

SvgCtl.$inject = ['$scope','$route','$location']


