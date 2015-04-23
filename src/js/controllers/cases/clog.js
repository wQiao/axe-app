'use strict';

/**
 * 案例设计方案控制层
 */
app.controller('DecorationCaseCLogCtrl', ['$scope','CLogs','$stateParams',function($scope, CLogs,$stateParams) {

    // -- Variable ----//
    var ctrl = this;

    $scope.clogs = [];

    // -- Methods ---/
    CLogs.getData({caseId:$stateParams.caseId,planId:$stateParams.planId},function(result){
        $scope.clogs = result.data;
    })
}]);
