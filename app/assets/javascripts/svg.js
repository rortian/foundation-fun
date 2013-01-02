var tessellations = [
  "cm","cmm","p1","p2","p3","p3m1","p4","p4g","p4m","p6"
]

angular.module('SvgApp', [], function($routeProvider){
  for (tess in tessellations){
    $routeProvider.when("/"+tess,{templateUrl:"/tessellations/"+tess+".html"})
  }
  $routeProvider
    .otherwise({redirectTo:'p6'})
})

function SvgCtl($scope,$route){

  $scope.tessellations = tessellations;
  $scope.current = "p3";


}

SvgCtl.prototype = {

}

