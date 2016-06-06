// angular.module('myApp', ['ui.router'])
angular.module('myApp', ['ui.router', 'ngCart'])

.config(function($stateProvider, $urlRouterProvider) {

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

}) // end config
