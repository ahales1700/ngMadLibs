/**
 * Created by Anthony Hales on 11/4/2015.
 */
angular.module('ngMadLibs', [])
    .controller('madLibCtrl', function ($scope) {
        $scope.master = {
            female_name: '',
            job_title: '',
            tedious_task: '',
            dirty_task: '',
            celebrity: '',
            useless_skill: '',
            adjective: '',
            obnoxious_celebrity: '',
            huge_number: ''
        };
        $scope.reset = function () {
            $scope.madLib = angular.copy($scope.master);
        };

        $scope.submit = function () {
            $scope.madLibImportForm.$submitted = true;
        };

        $scope.startOver = function () {
            $scope.reset();
            $scope.madLibImportForm.$submitted = false;
        };

        $scope.reset();
    });