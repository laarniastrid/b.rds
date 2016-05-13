angular.module('myApp')

.controller('storeCtrl', function(storeSvc) {
  let vm = this;

  vm.storeProducts = storeSvc.getStoreProducts();
    // .then((response) => {
    //   console.log(response.data);
    // })


})  // end storeCtrl
