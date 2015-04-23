'use strict';

/* Controllers */

angular.module('app').controller('AppCtrl',['$scope','$window',function($scope, $window) {

    var ua = $window['navigator']['userAgent'];
    // config
    $scope.app = {
        version : '0.0.1',
        footer:true,
        isIOS:/(iPhone|iPad|iPod|iOS)/i.test(ua),
        isAndroid:/(android)/i.test(ua),
        clientUrl: /(iPhone|iPad|iPod|iOS)/i.test(ua) ? 'http://www.pgyer.com/wMNp' : 'http://www.pgyer.com/KBl6'
    }
}]);
