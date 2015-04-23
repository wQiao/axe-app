/**
 * 计算相对位置（父节点）
 */
app.directive('relativeLocation',['$timeout',function($timeout){
    return {
        restrict: 'A',
        scope:{
            rtop:'=',
            rleft:'='
        },
        terminal:true,
        link: function(scope, element, attrs, ctrl) {
            var watchSize=scope.$watch(function () {
                return {
                    w: element.parent()[0].offsetWidth,
                    h: element.parent()[0].offsetHeight
                };
            },function(newSize,oldSize){
                if(newSize.w > 0 ){
                    element.css({
                        'top':Math.round(scope.rtop*100)+'%',
                        'left': Math.round(scope.rleft*100) + '%'
                    });
                    watchSize();
                }
            },true);
           //var watchTop = scope.$watch('rtop',function(value){
           //    if(!!value){
           //        var h = element.parent()[0].offsetHeight;
           //        element.css('top',Math.round(h*value)+'px');
           //
           //    }
           //});
           //var watchLeft = scope.$watch('rleft',function(value){
           //     if(!!value) {
           //         var w = element.parent()[0].offsetWidth;
           //         element.css('left', Math.round(w * value) + 'px');
           //     }
           //});
        }
    };
}])