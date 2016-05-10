angular.module('myApp')

.controller('trafficCtrl', function() {
  let vm = this;

  vm.typesSource = 'http://www.endslaverynow.org/learn/slavery-today';

  // test tab jquery
  $('nav-tabs').click(function() {
    console.log('hi there');
  })

})  // end trafficCtrl
