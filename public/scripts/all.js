// angular.module('myApp', ['ui.router'])
angular.module('myApp', ['ui.router', 'ngCart'])

.config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider) {

  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: './html/home/homeView.html',
    controller: 'homeCtrl',
    controllerAs: 'vm'
  })
  .state('about', {
    url: '/about',
    templateUrl: './html/about/aboutView.html'
  })
  .state('contact', {
    url: '/contact',
    templateUrl: './html/contact/contactView.html',
    controller: 'contactCtrl',
    controllerAs: 'vm'
  })
  .state('traffic', {
    url: '/traffic',
    templateUrl: './html/traffic/trafficView.html',
    controller: 'trafficCtrl',
    controllerAs: 'vm'
  })
  // .state('sellBrds', {
  //   url: '/sellBrds',
  //   templateUrl: './html/sellBrds/sellBrdsView.html'
  // })
  // .state('rentBrds', {
  //   url: '/rentBrds',
  //   templateUrl: './html/rentBrds/rentBrdsView.html'
  // })
  // .state('donateBrds', {
  //   url: '/donateBrds',
  //   templateUrl: './html/donateBrds/donateBrdsView.html'
  // })
  // .state('buyBrds', {
  //   url: '/buyBrds',
  //   templateUrl: './html/buyBrds/buyBrdsView.html'
  // })
  .state('store', {
    url: '/store',
    templateUrl: './html/store/storeView.html',
    controller: 'storeCtrl',
    controllerAs: 'vm'
  })
  .state('cart', {
    url: '/cart',
    templateUrl: './html/cart/cartView.html',
    controller: 'cartCtrl',
    controllerAs: 'vm'
  })

  $urlRouterProvider.otherwise('/');

}]) // end config


angular.module('myApp')

.directive('animateDir', ["$state", function($state) {
  return {
    restrict: 'A',
    link: function(scope, ele, att) {

      $('.typesBtn').click(function() {
        $('#' + this.value).css('display', 'block');
        $('#' + this.value).siblings().css('display', 'none');
      })
    }
  }  // end return
}])  // end animateDir

angular.module('myApp')

.controller('cartCtrl', ["cartSvc", function(cartSvc) {
  let vm = this;

  vm.business = cartSvc.getBusiness();

}])  // end cartCtrl

angular.module('myApp')

.service('cartSvc', function() {
  let business = 'las723sp@gmail.com';

  // ----- getters ----- //
  this.getBusiness = () => {
    return business;
  }

}) // end cartSvc

angular.module('myApp')

.controller('contactCtrl', ["contactSvc", function(contactSvc) {
  let vm = this;

  vm.contactUrl = contactSvc.getUrl();

  vm.sendRequest = (input) => {
    contactSvc.setData(input.name, input.email, input.message);
    contactSvc.sendMessage();
    vm.sendData = '';
  }

}])  // end contactCtrl

angular.module('myApp')

.service('contactSvc', ["$http", function($http) {

  let sendUrl = 'https://formspree.io/laarni.astrid@gmail.com';
  let sendData = {
    name: '',
    email: '',
    message: ''
  };
  let sendSuccess = 'Your message was sent!';

  // ---------- setters ---------- //
  this.setData = (name, email, message) => {
    sendData.name = name;
    sendData.email = email;
    sendData.message = message;
  }

  // ---------- getters ---------- //
  this.getUrl = () => {
    return sendUrl;
  }

  // ---------- manipulators ---------- //
  this.sendMessage = (name, email, message) => {
    $.ajax({
      url: sendUrl,
      method: 'POST',
      data: sendData,
      dataType: 'json',
      error: (response) => {
        ifSuccess(response);
      },
      success: () => {
        ifSuccess(sendSuccess);
      }
    })
  }

  function ifSuccess(data) {
    alert(data);
  }

}])  // end contactSvc

angular.module('myApp')

.controller('homeCtrl', ["storeSvc", function(storeSvc) {
  let vm = this;

  vm.products = storeSvc.getStoreProducts()
    .then((response) => {
      vm.data = response.data;
      // return vm.data;
      storeSvc.setProducts(vm.data);
    })

}]) // end homeCtrl

angular.module('myApp')

.directive('navDir', function() {
  return {
    restrict: 'E',
    templateUrl: './html/navigation/navTmpl.html'
  }
})

angular.module('myApp')

.controller('storeCtrl', ["storeSvc", function(storeSvc) {
  let vm = this;

  // vm.storeProducts = storeSvc.getStoreProducts()
  //   .then((response) => {
  //     vm.data = response.data;
  //     return vm.data;
  //   })

  vm.products = storeSvc.getProducts();

}])  // end storeCtrl

angular.module('myApp')

.service('storeSvc', ["$http", function($http) {

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

}])  // end storeSvc

angular.module('myApp')

.controller('trafficCtrl', function() {
  let vm = this;

  vm.typesSource = 'http://www.endslaverynow.org/learn/slavery-today';

})  // end trafficCtrl
