'use strict';

angular.module('app.services', []).factory('DecorationCases', ['$resource', function ($resource) {
    return $resource('/api/decoration/special/:caseId/info', {}, {
        getData: {
            url:'http://test.account.bhome.cc:803/api/decoration/special/:caseId/info',
            Method: 'GET',
            headers:  {}
        }
    });
}]).factory('Designs', ['$resource', function ($resource) {
    return $resource('/api/decoration/special/:caseId/proposals', {}, {
        getData: {
            url:'http://test.account.bhome.cc:803/api/decoration/special/:caseId/proposals',
            Method: 'GET',
            headers: {}
        }
    });
}]).factory('Plans', ['$resource', function ($resource) {
    return $resource('/api/decoration/special/:caseId/schedules', {}, {
        getData: {
            url:'http://test.account.bhome.cc:803/api/decoration/special/:caseId/schedules',
            Method: 'GET',
            headers: {}
        }
    });
}]).factory('CLogs', ['$resource', function ($resource) {
    return $resource('/api/decoration/special/:caseId/schedule/:planId/logs', {}, {
        getData: {
            url:'http://test.account.bhome.cc:803/api/decoration/special/:caseId/schedule/:planId/logs',
            Method: 'GET',
            headers:  {}
        }
    });
}]).factory('SceneRooms', ['$resource', function ($resource) {
    return $resource('/api/decoration/special/:caseId/scenes/param/rooms', {}, {
        getData: {
            url:'http://test.account.bhome.cc:803/api/decoration/special/:caseId/scenes/param/rooms',
            Method: 'GET',
            headers:  {}
        }
    });
}]).factory('Scenes', ['$resource', function ($resource) {
    return $resource('/api/decoration/special/:caseId/scenes', {}, {
        getData: {
            url:'http://test.account.bhome.cc:803/api/decoration/special/:caseId/scenes',
            Method: 'GET',
            headers:  {}
        }
    });
}]).factory('Budgets', ['$resource', function ($resource) {
    return $resource('/api/decoration/special/:caseId', {}, {
        getData: {
            url:'http://test.account.bhome.cc:803/api/decoration/special/:caseId/budgets',
            Method: 'GET',
            headers:  {}
        }
    });
}]).factory('BudgetMaterials', ['$resource', function ($resource) {
    return $resource('/api/decoration/special/:caseId/materials/:typeCode', {}, {
        getData: {
            url:'http://test.account.bhome.cc:803/api/decoration/special/:caseId/materials/:typeCode',
            Method: 'GET',
            headers:  {}
        }
    });
}]).factory('Completions', ['$resource', function ($resource) {
    return $resource('/api/decoration/special/:caseId/completeds', {}, {
        getData: {
            url:'http://test.account.bhome.cc:803/api/decoration/special/:caseId/completeds',
            Method: 'GET',
            headers:  {}
        }
    });
}]);
