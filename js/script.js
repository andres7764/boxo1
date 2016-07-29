window.onload = function(){

	$(".textLt").textillate({
		minDisplayTime: 2000,
		sync: false,
		in:{
			effect: 'fadeInLeftBig'
		}
	});

	$("#inicioSesion").submit(function(e){
		e.preventDefault();
		$.ajax({
			datatype: "Text",
			method: "POST",
			data : { username: $("#username").val(), password: $("#password").val() },
			url: "http://104.198.200.121:8080/auth/login/"
		}).success(function(response){
			console.log(response);
			if(response.token){
			  sessionStorage.setItem("token", response.token);
			  window.location = "http://localhost:3000/home/"+$("#username").val();
			} else {
			$("#texto").html("Error con el ingreso");
			}
		})
	})
}