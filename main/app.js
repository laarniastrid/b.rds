angular.module('myApp', ['ui.router'])

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
  .state('home', {
    url: '/home',
    templateUrl: './html/home/homeTmpl.html'
  })
  .state('about', {
    url: '/about',
    templateUrl: './html/about/aboutTmpl.html'
  })
  .state('contact', {
    url: '/contact',
    templateUrl: './html/contact/contactTmpl.html'
  })
  .state('trafficking', {
    url: '/trafficking',
    templateUrl: './html/trafficking/traffickingTmpl.html'
  })
  .state('sellBrds', {
    url: '/sellBrds',
    templateUrl: './html/sellBrds/sellBrdsTmpl.html'
  })
  .state('rentBrds', {
    url: '/rentBrds',
    templateUrl: './html/rentBrds/rentBrdsTmpl.html'
  })
  .state('donateBrds', {
    url: '/donateBrds',
    templateUrl: './html/donateBrds/donateBrdsTmpl.html'
  })
  .state('buyBrds', {
    url: '/buyBrds',
    templateUrl: './html/buyBrds/buyBrdsTmpl.html'
  })
  .state('store', {
    url: '/store',
    templateUrl: './html/store/storeTmpl.html'
  })
  .state('cart', {
    url: '/cart',
    templateUrl: './html/cartTmpl.html'
  })

  $urlRouterProvider.otherwise('/home');

}) // end config
