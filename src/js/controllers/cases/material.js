'use strict';
/**
 * 案例 预算材料 控制层
 */
angular.module('app').controller('DecorationCaseMaterialCtrl',['$scope','BudgetMaterials',function($scope,BudgetMaterials) {
    
    //-- Variable ---/
    var ctrl =this;

    $scope.types = [
        {code:1,name:"家具"},
        {code:2,name:"主材"},
        {code:3,name:"软装"},
        {code:4,name:"家纺"}
         //{code:1040,name:"电器"},
        //{code:1050,name:"园艺"}
    ];
    
    // 查询 日志 照片
    
    //-- Methods --/
     BudgetMaterials.getData({caseId:$scope.caseId,typeCode:0},function(result){
        $scope.materials = result.data;
     });

    $scope.action={
        selectType:function(type){
            $scope.selectedType = type;
        }
    }
}]);
