'use strict';

/**
 * 案例施工计划控制层
 */
angular.module('app').controller('DecorationCasePlanCtrl', ['$scope','Plans',function($scope,Plans) {

    //--- Variable ---/
    var ctrl = this;
    $scope.sum7=0;
    $scope.sumAll=0;
     //-- Methods ---/
    Plans.getData({caseId : $scope.caseId}, function(result) {
        var plans =result.data,
            i=0;
        ctrl.calculatePlanSammary(plans);

        for(;i<plans.length;i++){

            if($scope.sumAll>0){
                plans[i]._percent = ((plans[i].period/$scope.sumAll)*100).toFixed(1);
            }else{
                plans[i]._percent = 0;
            }

            var images=[];
             if(!qUtils.isEmpty(plans[i].images)){
                 images = plans[i].images.split(',');
             }
            plans[i].images = images;
        }
        $scope.plans = plans;
    });

    ctrl.calculatePlanSammary=function(plans){
        var i=0,_sum7=0,_sumall=0;
        for(;i<plans.length;i++){
            if(i<7){
                _sum7+=plans[i].period;
            }
            _sumall+=plans[i].period;
        }
        $scope.sumAll = _sumall;
        $scope.sum7 = _sum7;
    };

    $scope.action={
        viewLogs:function(plan){
            $scope.$state.go('^.clog',{planId:plan._id}).then(function(state){
                $scope.$state.$current.data.title =plan.title;
            });
        }
    };
}]);
