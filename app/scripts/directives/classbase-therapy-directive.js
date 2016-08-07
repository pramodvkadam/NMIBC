'use strict';

/**
 * @ngdoc directive
 * @name nmibcApp.directive:classbaseTherapyDirective
 * @description
 * # classbaseTherapyDirective
 */
angular.module('nmibcApp')
  .directive('classbaseTherapy', function () {
    return {
      templateUrl: 'views/directives/classbase-therapy-directive.html',
      scope:{
          therapy:'='
      },
        restrict: 'EA',
        controller:'classbaseTherapyController',
        controllerAs : 'vm'
    };
  }).controller('classbaseTherapyController',function($scope){
        var vm = this;
        vm.therapy = $scope.therapy;
    vm.dialogShown = false;
        var trCount = 0;
    vm.setCount = function(){
        trCount=0;
    }
   vm.getCount = function(){
       trCount +=1;
        return trCount;
    }
    vm.setModalData= function(data,link){
        vm.modalData = data;
        vm.redirectLink = link;
    }
    vm.toggleModal= function(){
vm.dialogShown=!vm.dialogShown;
    }
});
