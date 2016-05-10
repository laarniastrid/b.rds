angular.module('myApp')

.controller('contactCtrl', function(contactSvc) {
  let vm = this;

  vm.contactUrl = contactSvc.getUrl();

  vm.sendRequest = (input) => {
    contactSvc.setData(input.name, input.email, input.message);
    contactSvc.sendMessage();
    vm.sendData = '';
  }

})  // end contactCtrl
