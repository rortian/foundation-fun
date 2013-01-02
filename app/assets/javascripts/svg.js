var tessellations = [
  "cm","cmm","p1","p2","p3"
]

angular.module('SvgApp', [], function($routeProvider){
  $routeProvider
    .when('/p6',{templateUrl:'/tessellation/p6.html'})
    .otherwise({redirectTo:'p6'})
})

function SvgCtl($scope,$route){

  $scope.tessellations = tessellations;
  $scope.current = "p3";


}

SvgCtl.prototype = {

}

