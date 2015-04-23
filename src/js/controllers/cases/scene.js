'use strict';

/**
 * 案例施工场景控制层
 */
app.controller('DecorationCaseSceneCtrl', ['$scope', 'SceneRooms', 'Scenes', '$q', '$modal', function ($scope, SceneRooms, Scenes, $q, $modal) {
    // -- Variable --/
    $scope.currentRoom = null;

    $scope.slides = [];

    $q.all([
        SceneRooms.getData({caseId: $scope.caseId}).$promise,
        Scenes.getData({caseId: $scope.caseId}).$promise
    ]).then(function (results) {
        var rooms = results[0].data,
            scenes = results[1].data;
        angular.forEach(rooms, function (room) {
            room.scenes = [];
            angular.forEach(scenes, function (scene) {
                if (room.code == scene.roomCode) {
                    room.scenes.push(scene);
                    scene.room = room;
                    scene._active=false;
                    $scope.slides.push(scene);
                }
            });
        });
        $scope.rooms = rooms;
        if (!qUtils.arrays.isEmpty(rooms)) {
            $scope.action.selectRoom(rooms[0])
        }

        $scope.$watch(function(){
            return $scope.slides.filter(function (s) { return s._active;})[0];
        },function(newSlide,oldSlide){
            if ($scope.currentRoom !== newSlide.room) {
                $scope.currentRoom = newSlide.room;
            }
        })
    });

    // -- method --/
    $scope.action = {
        selectRoom: function (room) {
            if ($scope.currentRoom !== room) {
                $scope.currentRoom = room;
                $scope.currentRoom.scenes[0]._active = true;
            }
        },
        open: function (evt, item) {
            evt.preventDefault();
            evt.stopPropagation();
            $modal.open({
                templateUrl: 'tpl/cases/acceptance.html',
                controller: 'AcceptanceCtrl',
                windowClass: 'app-modal-bottom',
                backdrop: 'static',
                size: 'sm',
                resolve: {
                    deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                        return $ocLazyLoad.load(['js/controllers/cases/acceptance.js']);
                    }],
                    params: function () {
                        return {
                            acceptance: item
                        };
                    }
                }
            });

        }

    }

}]);
