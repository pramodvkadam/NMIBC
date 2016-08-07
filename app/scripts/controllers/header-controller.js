'use strict';

/**
 * @ngdoc function
 * @name nmibcApp.controller:HeaderControllerCtrl
 * @description
 * # HeaderControllerCtrl
 * Controller of the nmibcApp
 */
angular.module('nmibcApp')
  .controller('HeaderController', function (riskClassbasedTherapyService) {

        var vm = this;
      vm.lastUpdated = "";
      riskClassbasedTherapyService.setTherapyPattern().then(function(){
          vm.lastUpdated = riskClassbasedTherapyService.getLastUpdateDate();
      });

      $('[data-submenu]').submenupicker();
  });
