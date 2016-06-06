angular.module('myApp')

.controller('homeCtrl', function(storeSvc) {
  let vm = this;

  vm.products = storeSvc.getStoreProducts()
    .then((response) => {
      vm.data = response.data;
      // return vm.data;
      storeSvc.setProducts(vm.data);
    })

}) // end homeCtrl
