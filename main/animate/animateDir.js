angular.module('myApp')

.directive('animateDir', function($state) {
  return {
    restrict: 'A',
    link: function(scope, ele, att) {

      $('.typesBtn').click(function() {
        $('#' + this.value).css('display', 'block');
        $('#' + this.value).siblings().css('display', 'none');
      })
    }
  }  // end return
})  // end animateDir
