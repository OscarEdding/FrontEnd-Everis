//Definiendo un arreglo nombre de errores
var arreglo = new Array();
arreglo[0] = "errorUsuario";
arreglo[1] = "errorPassword";

function validar() {
	var entrada = new Array();
	entrada[0] = document.getElementById("usuario").value;
	entrada[1] = document.getElementById("password").value;

	var error = new Array();
	error[0] = "<span style='color: red'>Ingrese su nombre!!</span>";
	error[1] = "<span style='color: red'>Ingrese su contraseña!!</span>";

	//Definiendo un ciclo forech
	for (i in entrada) {
		var mensajeError = error[i];
		var valorArreglo = arreglo[i];
		//Validando campo requerido
		if (entrada[i] == "") {
			document.getElementById(valorArreglo).innerHTML = mensajeError;
		}
        else {
			document.getElementById(valorArreglo).innerHTML = "Correcto";
		}
	}
}

function validarTodos(){
    var contador = 0;
    for(i=0; i<2; i++){
        var valorArreglo = arreglo[i];
        if( document.getElementById(valorArreglo).innerHTML == "Correcto")
        {
            contador++;
        }
    }
    if(contador == 2){
        document.getElementById('mensajefinal').innerHTML = "Usuario Logeado Exitosamente!"
        
    }
}
