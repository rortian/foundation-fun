
angular.module('SvgApp', [], function($routeProvider){
  $routeProvider
    .when('/p6',{templateUrl:'/tessellation/p6.html'})
    .otherwise({redirectTo:'p6'})
})

function SvgCtl($scope){}
