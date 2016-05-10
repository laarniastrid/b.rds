angular.module('myApp', ['ui.router'])

.config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider) {

  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: './html/home/homeView.html'
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
    templateUrl: './html/store/storeView.html'
  })
  .state('cart', {
    url: '/cart',
    templateUrl: './html/cartView.html'
  })

  $urlRouterProvider.otherwise('/');

}]) // end config


angular.module('myApp')

.directive('animateDir', ["$state", function($state) {
  return {
    restrict: 'A'
    // link: function(scope, ele, att) {
    //   $('.home-bottom').click(function() {
    //     setTimeout(function() {
    //       $('#about').addClass('.slideDown');
    //     }, 150)
    //   })
    // }
  }  // end return
}])  // end animateDir

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

.directive('navDir', function() {
  return {
    restrict: 'E',
    templateUrl: './html/navigation/navTmpl.html'
  }
})

angular.module('myApp')

.controller('trafficCtrl', function() {
  let vm = this;

  vm.typesSource = 'http://www.endslaverynow.org/learn/slavery-today';
  
  // test tab jquery
  $('nav-tabs li').click(function() {
    console.log('hi there');
  })

})  // end trafficCtrl
