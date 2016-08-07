'use strict';

/**
 * @ngdoc function
 * @name nmibcApp.controller:RiskClassbasedTherapyCtrl
 * @description
 * # RiskClassbasedTherapyCtrl
 * Controller of the nmibcApp
 */
angular.module('nmibcApp')
  .controller('RiskClassbasedTherapyController', function ($routeParams,riskClassbasedTherapyService) {
var vm =this;
    vm.routeParams = $routeParams;

    function init(){
      //set pattern
      riskClassbasedTherapyService.setTherapyPattern().then(function(){

        vm.therapyData = riskClassbasedTherapyService.getFilteredTherapyPatterns(vm.routeParams);
      });
    }

    init();
  });
