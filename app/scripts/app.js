'use strict';

/**
 * @ngdoc overview
 * @name nmibcApp
 * @description
 * # nmibcApp
 *
 * Main module of the application.
 */
angular
  .module('nmibcApp', [
    'ngRoute',
    'xml',
      'rzModule',
      'ngModal'
  ])
  .config(function ($routeProvider,$httpProvider) {

      $httpProvider.interceptors.push('xmlHttpInterceptor');
      $routeProvider
          .when('/',
              {
                  templateUrl : 'views/risk-stratification.html',
                  controller : 'RiskStratificationController',
                  controllerAs: 'vm'
              })

          .when('/liability-reference',
              {
                  'templateUrl' : 'views/liability-reference.html'
              })

          .when('/imprint',
              {
                  'templateUrl' : 'views/imprint.html'
              })

          .when('/glossary',
              {
                  'templateUrl' : 'views/glossary.html'
              })


          .when('/risk-classbased-therapy/:therapy1?/:therapy2?', {
            templateUrl: 'views/risk-classbased-therapy.html',
            controller: 'RiskClassbasedTherapyController',
            controllerAs: 'vm'
          })
          .otherwise({redirectTo: '/'});
  });
