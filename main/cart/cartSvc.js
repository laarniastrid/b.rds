angular.module('myApp')

.service('cartSvc', function($http) {

  // ----- getters ----- //
  this.getBusiness = () => {
    return $http.get('/api/bus_email');
  }


}) // end cartSvc
