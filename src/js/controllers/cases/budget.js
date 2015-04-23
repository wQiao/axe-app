'use strict';

/**
 * 案例 预算 控制层
 */
app.controller('DecorationCaseBudgetCtrl', ['$scope','Budgets',function($scope,Budgets) {
    
    //-- Variable --/
    var ctrl = this;

     //  查询预算项目
    Budgets.getData({caseId : $scope.caseId}, function(result) {
        var rooms = result.data,
            _sum = 0;
        angular.forEach(rooms,function(room){
             _sum += room.amount;
        });
        $scope._sumPrice = _sum;
        $scope.rooms = rooms;
    });

}]);
