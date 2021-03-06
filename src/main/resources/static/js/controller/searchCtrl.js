app.controller('SearchCtrl', function ($scope, $http, $window) {
    $scope.params = {};

    $scope.search = function () {
        $http({
            method: 'POST',
            url: '/search',
            headers: {'Content-Type': 'application/json; charset=UTF-8'},
            data: JSON.stringify($scope.params)
        })
            .then(function () {
                console.log('ok - search')
                $window.location.href = '/#/display';
            })
    };

});
