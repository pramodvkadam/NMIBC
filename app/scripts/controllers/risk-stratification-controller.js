'use strict';

/**
 * @ngdoc function
 * @name nmibcApp.controller:RiskStratificationControllerCtrl
 * @description
 * # RiskStratificationControllerCtrl
 * Controller of the nmibcApp
 */
angular.module('nmibcApp')
  .controller('RiskStratificationController', function (riskStratificationService) {

      var vm= this;

      vm.columns = [];

      vm.slider = [];

      vm.onInit = function(){
          var lang = "";
          riskStratificationService.loadRiskAlgo(lang).then(function(){
              vm.columns =riskStratificationService.getColumns();

              vm.slider.typeRisk = riskStratificationService.initSlider(3, 'a', vm.columns.a);
              vm.slider.numberRisk = riskStratificationService.initSlider(2, 'b', vm.columns.b);
              vm.slider.sizeRisk = riskStratificationService.initSlider(2, 'c', vm.columns.c);
              vm.slider.storageRisk = riskStratificationService.initSlider(2, 'd', vm.columns.d);
              vm.slider.graderRisk = riskStratificationService.initSlider(3, 'e', vm.columns.e);
              vm.slider.morphologyRisk = riskStratificationService.initSlider(4, 'f', vm.columns.f);
              vm.slider.typeRisk.options.onChange = calculateRisk;
              vm.slider.numberRisk.options.onChange = calculateRisk;
              vm.slider.sizeRisk.options.onChange = calculateRisk;
              vm.slider.storageRisk.options.onChange = calculateRisk;
              vm.slider.graderRisk.options.onChange = calculateRisk;
              vm.slider.morphologyRisk.options.onChange = calculateRisk;

          });
      }

      function calculateRisk(){
          vm.calculatedRisk = riskStratificationService.getCalculations(vm.slider);



          if (vm.calculatedRisk == 1) {
              vm.lowRisk =  ['A', ''];
              vm.intermidateRisk =  ['A', ''];
              vm.highRisk =  ['A', ''];
              vm.highestisk =  ['A', ''];
          }
          else if (vm.calculatedRisk == 2) {
              vm.lowRisk = ['B1', 'B2'];
              vm.intermidateRisk = ['B1', 'B2'];
              vm.highRisk = ['B1', 'B2'];
              vm.highestisk = ['B1', 'B2'];
          }else if (vm.calculatedRisk == 3) {
              vm.lowRisk = ['C', ''];
              vm.intermidateRisk = ['C', ''];
              vm.highRisk = ['C', ''];
              vm.highestisk = ['C', ''];
          }else if (vm.calculatedRisk == 4) {
              vm.lowRisk = ['D', 'D*'];
              vm.intermidateRisk = ['D', 'D*'];
              vm.highRisk = ['D', 'D*'];
              vm.highestisk = ['D', 'D*'];
          }
      }

      vm.onInit();
  });
