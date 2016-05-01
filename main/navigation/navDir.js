angular.module('myApp')

.directive('navDir', function() {
  return {
    restrict: 'E',
    templateUrl: './html/navigation/navTmpl.html'
  }
})
