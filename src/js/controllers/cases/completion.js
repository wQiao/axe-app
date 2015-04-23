'use strict';

/**
 * 案例竣工实景控制层
 */
app.controller('DecorationCaseCompletionCtrl', ['$scope','Completions',function($scope,Completions) {

    //-- Variable --/
    var self =this;
    //self.completionIndex = 0;
    //self.completions=[];
    //
    //$scope.completion={};

    $scope.slides=[];
    Completions.getData({caseId:$scope.caseId},function(result){
        angular.forEach(result.data,function(item,key){
            item._active = key === 0;
            $scope.slides.push(item);
        });
        //$scope.slides = [].concat(self.completions);
        //if(!qUtils.arrays.isEmpty(self.completions)){
        //    $scope.completion =self.completions[0];
        //}
    })
    //--Methods --/

    //$scope.action={
    //    swipeLeft:function(){
    //        var index = self.completionIndex+1;
    //        if(index < self.completions.length){
    //            $scope.completion = self.completions[index];
    //            self.completionIndex =index;
    //        }
    //    },
    //    swipeRight:function(){
    //        var index = self.completionIndex-1;
    //        if(index >=0){
    //            $scope.completion = self.completions[index];
    //            self.completionIndex = index;
    //        }
    //    }
    //};
}]);
