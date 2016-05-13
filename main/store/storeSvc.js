angular.module('myApp')

.service('storeSvc', function($http) {

  this.getStoreProducts = () => {
    return $http.get('/api/products')
      // .then((repsonse) => {
      //   console.log(response);
      // })
  }

})  // end storeSvc
