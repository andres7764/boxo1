angular.module('admin', ['ngRoute'])

.config(function($routeProvider){ 
 $routeProvider
 .when('/login', {
 	templateUrl: 'login.html',
 	controller: 'ctrlLogin'
 })

 .when('/admin', {
 	templateUrl: 'views/homeAdmin.html',
 	controller: 'ctrlAdministrad'
 })
 .when('/usuario', {
 	templateUrl: 'views/usuario.html',
 	controller: 'ctrlUser'
 })
 .otherwise({
 	redirectTo: '/login'
 })


})



.controller('ctrlUser',function($scope){
	$scope.mensaje = "aqui está";
})

.controller('ctrlAdministrad',function($scope){
	$scope.mensaje = "aqui está";
})

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