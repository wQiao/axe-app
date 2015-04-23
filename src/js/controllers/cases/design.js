'use strict';

/**
 * 案例设计方案控制层
 */
angular.module('app').controller('DecorationCaseDesignCtrl', ['$scope','Designs',function($scope,Designs) {
    
    $scope.data=[];

    Designs.getData({caseId:$scope.caseId},function(result){
        //$scope.previews = [].concat(result.data);
        $scope.data=qUtils.arrays.stripe(result.data);
    });
}]);
