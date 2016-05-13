angular.module('myApp')

.controller('storeCtrl', function(storeSvc) {
  let vm = this;

  vm.storeProducts = storeSvc.getStoreProducts()
    .then((response) => {
      vm.data = response.data;
      return vm.data;
    })


})  // end storeCtrl
