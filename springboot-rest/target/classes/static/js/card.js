
angular.module('card', []).controller("CardCtrl", function($scope, $http) {

    $scope.load = function ()  {
        $http.get('card').
        success(function(data, status, headers, config) {
            $scope.cards = data;
        }).
        error(function(data, status, headers, config) {
            // log error
        });
    };

    $scope.save = function ()  {
        $http.post('card', angular.toJson($scope.card)).success(function () {

            console.log("hallo");
            $scope.load();
        });
    };

    $scope.delete = function (id)  {
        $http.delete("card/" + id).success(function () {
            $scope.load();
        });
    };
});

