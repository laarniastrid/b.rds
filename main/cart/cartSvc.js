angular.module('myApp')

.service('cartSvc', function() {
  let business = 'las723sp@gmail.com';

  // ----- getters ----- //
  this.getBusiness = () => {
    return business;
  }

}) // end cartSvc
