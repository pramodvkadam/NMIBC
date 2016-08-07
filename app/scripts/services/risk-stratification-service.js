'use strict';

/**
 * @ngdoc service
 * @name nmibcApp.riskStratificationService
 * @description
 * # riskStratificationService
 * Service in the nmibcApp.
 */
angular.module('nmibcApp')
  .service('riskStratificationService', function ($http,filterFilter) {
    var algorithms = [];
    this.loadRiskAlgo = function(lang){
      var lang = (lang) ? "_" + lang : "";
      return $http.get('data/alg'+lang+'.xml').then(function(response){
          algorithms = response.data.document;
      });
    }

      this.getColumns = function(){
          return algorithms.colNames;
      }

      this.initSlider = function(ceil, param, data) {
          console.log(data);
          return {
              minValue: 0,
              maxValue: 4,
              value: 1,
              getTickColor:'red',
              options: {
                  showSelectionBar: true,
                  showTicksValues: true,
                  displayScale: true,
                  pushRange: true,
                  ceil: ceil,
                  floor: 1,
                  step:1,
                  onChange: this.getCalculations,
                  translate: function(value) {
                      var riskstratification = [];

                      angular.forEach(data, function(ptrn) {
                          if (ptrn._id) {
                              //riskstratification.push(ptrn.__cdata);/
                              riskstratification[ptrn._id] = ptrn.__cdata;
                          }
                      });
                      return riskstratification[value];
                  }



              }
          };
      }

      this.getCalculations = function(slider){
           if (slider.typeRisk.value === 3 || slider.morphologyRisk.value === 4) {
             return 4;
          } else {
              return  filterFilter(algorithms.combinations.combination,{
                   _a: slider.typeRisk.value,
                   _b: slider.numberRisk.value,
                   _c: slider.sizeRisk.value,
                   _d: slider.storageRisk.value,
                   _e: slider.graderRisk.value,
                   _f: slider.morphologyRisk.value

               })[0]._risk;
          }
      }
  });
