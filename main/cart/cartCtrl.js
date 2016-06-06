angular.module('myApp')

.controller('cartCtrl', function(cartSvc) {
  let vm = this;

  vm.business = cartSvc.getBusiness()
    .then((response) => {
      vm.email = response.data;
      console.log(vm.email);
    })

})  // end cartCtrl
