'use strict';

/**
 * Config for the router
 */
angular.module('app').run(['$rootScope','$state','$stateParams',function($rootScope, $state, $stateParams) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
}]).config(['$stateProvider','$urlRouterProvider',function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/app/cases/view/48/info');

    var infoP;// bug  ui-rotuer  don't inject parent  resolve
    $stateProvider.state('app', {
        abstract : true,
        url : '/app',
        templateUrl : 'tpl/app.html'
    })
    //案例
    .state('app.cases', {
        abstract : true,
        url : '/cases',
        template : '<section ui-view></section>'
    })
    .state('app.cases.view', {
        url : '/view/{caseId:int}',
        controller:'CasesEditCtrl',
        template : '<section ui-view></section>',
        resolve : {
            deps : ['$ocLazyLoad',function($ocLazyLoad) {
               return $ocLazyLoad.load('js/controllers/cases/view.js');
            }],
            promiseInfo:['DecorationCases','$stateParams',function(DecorationCases,$stateParams){
                infoP = DecorationCases.getData({caseId:$stateParams.caseId}).$promise;
                return infoP.then(function(result){
                    var caseInfo = result.data;
                    if(caseInfo.budgetCost>0){
                        caseInfo.budgetCost = (caseInfo.budgetCost/10000).toFixed(2)
                    }
                    return caseInfo;
                });
            }]
        }
    })
    .state('app.cases.view.info', {
        url : '/info',
        data:{title:'典型案例',showNav:false},
        //templateUrl : 'tpl/cases/info.html',
        controller:'DecorationCaseInfoCtrl',
        templateProvider:['$templateFactory',function ($templateFactory) {
            return infoP.then(function(result){
                var caseInfo = result.data;
                return $templateFactory.fromUrl(caseInfo.typeCode === 2 ? 'tpl/cases/info.jx.html':'tpl/cases/info.html');
            });
        }],
        resolve:{
            deps: ['$ocLazyLoad',function($ocLazyLoad) {
               return $ocLazyLoad.load(['js/controllers/cases/info.js']);
            }]
        }
    })
    .state('app.cases.view.design', {
        url : '/design',
        data:{title:'设计方案',showNav:true},
        templateUrl : 'tpl/cases/design.html',
        controller:'DecorationCaseDesignCtrl',
        resolve:{
            deps: ['$ocLazyLoad',function($ocLazyLoad) {
               return $ocLazyLoad.load(['js/controllers/cases/design.js']);
            }]
        }
    })
    .state('app.cases.view.plan', {
        url : '/plan',
        data:{title:'施工计划',showNav:true},
        templateUrl : 'tpl/cases/plan.html',
        controller:'DecorationCasePlanCtrl',
        resolve:{
            deps: ['$ocLazyLoad',function($ocLazyLoad) {
               return $ocLazyLoad.load('js/controllers/cases/plan.js');
            }]
        }
    })
    .state('app.cases.view.clog', {
        url : '/plan/{planId:int}/clog',
        data:{title:'施工日志',showNav:true},
        templateUrl : 'tpl/cases/clog.html',
        controller:'DecorationCaseCLogCtrl',
        resolve:{
            deps: ['$ocLazyLoad',function($ocLazyLoad) {
               return $ocLazyLoad.load(['js/controllers/cases/clog.js']);
            }]
        }
    })
    .state('app.cases.view.scene', {
        url : '/scene',
        data:{title:'施工场景',showNav:true},
        templateUrl : 'tpl/cases/scene.html',
        controller:'DecorationCaseSceneCtrl',
        resolve:{
            deps: ['$ocLazyLoad',function($ocLazyLoad) {
               return $ocLazyLoad.load(['js/controllers/cases/scene.js']);
            }]
        }
    })
    .state('app.cases.view.budget', {
        url : '/budget',
        data:{title:'工程预算',showNav:true},
        templateUrl : 'tpl/cases/budget.html',
        controller:'DecorationCaseBudgetCtrl',
        resolve:{
            deps: ['$ocLazyLoad',function($ocLazyLoad) {
               return $ocLazyLoad.load(['js/controllers/cases/budget.js']);
            }]
        }
    })
    .state('app.cases.view.material', {
        url : '/material',
        templateUrl : 'tpl/cases/material.html',
        controller:'DecorationCaseMaterialCtrl',
        data:{title:'材料预算',showNav:true},
        resolve:{
            deps: ['$ocLazyLoad',function($ocLazyLoad) {
               return $ocLazyLoad.load(['js/controllers/cases/material.js']);
            }]
        }
    })
    .state('app.cases.view.completion', {
        url : '/completion',
        data:{title:'竣工实景',showNav:true},
        templateUrl : 'tpl/cases/completion.html',
        controller:'DecorationCaseCompletionCtrl',
        resolve:{
            deps: ['$ocLazyLoad',function($ocLazyLoad) {
               return $ocLazyLoad.load(['js/controllers/cases/completion.js']);
            }]
        }
    })
}]);
