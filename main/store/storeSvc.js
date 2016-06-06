angular.module('myApp')

.service('storeSvc', function($http) {

  let products = [];

  this.setProducts = (input) => {
    input.forEach((entry, i) => {
      products[i] = entry;
    })
  }

  this.getProducts = () => {
    return products;
  }

  this.getStoreProducts = () => {
    return $http.get('/api/products');
  }

})  // end storeSvc
