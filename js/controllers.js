/*angular.module('controllers', [])

.controller('ctrlLogin', function($scope, $http){
	$scope.inicioSesion = function(){
		console.log($scope.usuario);
		if($scope.usuario && $scope.contrasena){
			console.log("1");
			$http({
					url: 'http://104.154.58.249:8080/auth/login/',
					method: 'post',
					data: { username: $scope.usuario, password: $scope.contrasena },
					headers: { 'content-type': 'application/json' }
				}).then(function(response){
					console.log(response);
				})
		} else {

		}
		
	}
})
*/