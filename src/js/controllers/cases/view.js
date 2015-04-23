'use strict';

/**
 * 案例编辑基本控制层
 */
angular.module('app').controller('CasesEditCtrl', ['$scope','$stateParams','promiseInfo',function($scope, $stateParams,promiseInfo) {
    $scope.caseId = $stateParams.caseId;

    $scope.caseInfo = promiseInfo;

}]);
