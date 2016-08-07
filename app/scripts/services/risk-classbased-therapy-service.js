'use strict';

/**
 * @ngdoc service
 * @name nmibcApp.riskClassbasedTherapyService
 * @description
 * # riskClassbasedTherapyService
 * Service in the nmibcApp.
 */
angular.module('nmibcApp')
  .service('riskClassbasedTherapyService', function ($http) {
        var therapyPattern = [];
        var lastUpdated = "";
      this.setTherapyPattern = function(lang) {
          var lang = (lang) ? "_" + lang : "";
          return $http.get('data/patterns' + lang + '.xml').then(function (response) {
              therapyPattern = response.data.document.patterns.pattern;
              lastUpdated = response.data.document._pubDate;
          });
      }

      this.getLastUpdateDate = function(){
          return lastUpdated;
      }

          this.getFilteredTherapyPatterns = function(params){
             if(!Object.keys(params).length){
                  return therapyPattern;
              }
            return therapyPattern.filter(function(pattern){
              return  pattern.scheme.__cdata === params.therapy1 || pattern.scheme.__cdata === params.therapy2;
            })
          }



  });
