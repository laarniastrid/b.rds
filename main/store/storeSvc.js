angular.module('myApp')

.service('storeSvc', function($http) {

  this.getStoreProducts = () => {
    return $http.get('/api/products');
  }

})  // end storeSvc
