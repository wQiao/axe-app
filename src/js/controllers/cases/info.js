'use strict';

angular.module('app').controller('DecorationCaseInfoCtrl', ['$scope','Completions',function($scope,Completions) {

    //判断是否是精选案例
    if(!!$scope.caseInfo && $scope.caseInfo.typeCode === 2){
        Completions.getData({caseId:$scope.caseId},function(result){
            $scope.designs= result.data;
        });
    }
}]);
