angular.module('app').directive('imageLoad',[function(){
    return {
        restrict: 'A',
        terminal:true,
        link: function(scope, element, attr, ctrl) {
            var containerSize={},
                setImageUrl=function(){
                    if (containerSize.w > 0 && !!containerSize.src) {
                        var path = [];
                        path.push(containerSize.src, '@', containerSize.w, 'w');

                        if (attr.equalWidth === 'true') {
                            path.push('_', containerSize.w, 'h');
                        }
                        if (attr.equalHeight === 'true') {
                            path.push('_', containerSize.h, 'h');
                        }

                        if (attr.contain === 'true') {
                            path.push('_1e_1c')
                        }
                        attr.$set('src', path.join(''));
                    }
                },unbindWatcher = scope.$watch(function () {
                        return {
                            w: element.parent()[0].offsetWidth,
                            h: element.parent()[0].offsetHeight
                        };
                    }, function (newSize, oldSize) {
                        if (newSize.w > 0){
                            containerSize.w =newSize.w;
                            containerSize.h =newSize.h;
                            unbindWatcher();
                            setImageUrl();
                        }
                    }, true);

            attr.$observe('imageLoad',function(value){
                if(!!value){
                    containerSize.src=value;
                    setImageUrl();
                }
            });

            if(!!attr.previews && !!window.wx){
                element.bind('click',function(){
                    var srcList = [],
                        paths = attr.previews.split("."),
                        items = scope.$parent || [];
                    for (var p = 0; p < paths.length; p++) {
                        items = items[paths[p]];
                    }
                    for (var i = 0; i < items.length; i++) {
                        srcList.push(items[i].imageUrl);
                    }
                    wx.previewImage({
                        current: srcList[scope.$index], // 当前显示的图片链接
                        urls: srcList // 需要预览的图片链接列表
                    });
                    //WeixinApi.imagePreview(srcList[scope.$index], srcList)
                });
            }
        }
    };
}]);