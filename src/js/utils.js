'use strict';

var qUtils = (function() {
    return {
        isEmpty:function(v,allowEmptyString){
            return  (v === null) || (v === undefined) || (!allowEmptyString ? v === '' : false);
        },
        arrays : {
            isEmpty:function(v){
                return  (v === null) || (v === undefined) || (v.length === 0);
            },
            stripe : function(data) {
                if (!!data && angular.isArray(data)) {
                    var arr1 = [],
                        arr2 = [],
                        i = 0;
                    for (; i < data.length; i++) {
                        if (i % 2 === 0) {
                            arr1.push(data[i])
                        } else {
                            arr2.push(data[i])
                        }
                    }
                    return arr1.concat(arr2);
                } else {
                    return [];
                }
            },
            contains : function(arr, v) {
                var i = arr.length-1;
                for (; i >= 0; i--) {
                    if (arr[i] === v) {
                        return true;
                    }
                }
                return false;
            }
        }
    };
})();