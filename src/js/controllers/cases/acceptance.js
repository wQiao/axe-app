'use strict';

/**
 * 案例施工场景 验收说明控制层
 * 裁剪图从起点(100, 50)到裁剪100x100的大小
 * http://image-demo.img-cn-hangzhou.aliyuncs.com/example.jpg@100-50-100-100a
 */
app.controller('AcceptanceCtrl', ['$scope','$modalInstance','params',function($scope, $modalInstance,params) {
    
    var self = this;
    // init component
    $scope.acceptance = params.acceptance;
   
    //-- Methods --//
    $scope.action={
        close:function(){
            $modalInstance.dismiss('cancel');
        }
    }
     
}]);
