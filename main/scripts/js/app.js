angular.module('myApp', ['ui.router'])

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: './html/views/home.html'
  })
  .state('about', {
    url: '/about',
    templateUrl: './html/views/about.html'
  })
  .state('adopts', {
    url: '/adopts',
    templateUrl: './html/views/adopts.html'
  })
  .state('humans', {
    url: '/humans',
    templateUrl: './html/views/humans.html'
  })
  .state('rent', {
    url: '/rent',
    templateUrl: './html/views/rent.html'
  })
  .state('sell', {
    url: '/sell',
    templateUrl: './html/views/sell.html'
  })
  .state('donate', {
    url: '/donate',
    templateUrl: './html/views/donate.html'
  })
  .state('buy', {
    url: '/buy',
    templateUrl: './html/views/buy.html'
  })
  .state('store', {
    url: '/store',
    templateUrl: './html/views/store.html'
  })
  .state('cart', {
    url: '/cart',
    templateUrl: './html/views/cart.html'
  });

  $urlRouterProvider.otherwise('/');

});  // end config
