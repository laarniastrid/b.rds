angular.module('myApp')

.directive('animateDir', function($state) {
  return {
    restrict: 'A'
    // link: function(scope, ele, att) {
    //   $('.home-bottom').click(function() {
    //     setTimeout(function() {
    //       $('#about').addClass('.slideDown');
    //     }, 150)
    //   })
    // }
  }  // end return
})  // end animateDir
