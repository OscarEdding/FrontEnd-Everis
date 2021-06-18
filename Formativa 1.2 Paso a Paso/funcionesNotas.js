//Definiendo un arreglo nombre de errores
var arreglo = new Array();
arreglo[0] = "errorNota1";
arreglo[1] = "errorNota2";
arreglo[2] = "errorNota3";
arreglo[3] = "errorNota4";
arreglo[4] = "errorNotaExamen";

function validar() {
	var entrada = new Array();
	entrada[0] = document.getElementById("nota1").value;
	entrada[1] = document.getElementById("nota2").value;
	entrada[2] = document.getElementById("nota3").value;
	entrada[3] = document.getElementById("nota4").value;
	entrada[4] = document.getElementById("notaExamen").value;

	var error = new Array();
	error[0] = "<span style='color:red'>Ingrese la Nota 1!!</span>";
	error[1] = "<span style='color: red'>Ingrese la Nota 2!!</span>";
	error[2] = "<span style='color: red'>Ingrese la Nota 3!!</span>";
	error[3] = "<span style='color: red'>Ingrese la Nota 4!!</span>";
	error[4] = "<span style='color: red'>Ingrese la Nota de Examen!!</span>";
	error[5] = "<span style='color: red'>Ingrese una nota entre 1 y 7!!</span>";

	//Definiendo un ciclo forech
	for (i in entrada) {
		var mensajeError = error[i];
		var valorArreglo = arreglo[i];
		var errorIngreso = error[5];
		//Validando campo requerido
		if (entrada[i] == "") {
			document.getElementById(valorArreglo).innerHTML = mensajeError;
		}
		else if (parseFloat(entrada[i]) >= 1 && parseFloat(entrada[i]) <= 7) {
			document.getElementById(valorArreglo).innerHTML = "Nota Válida";
		}
		else {
			document.getElementById(valorArreglo).innerHTML = errorIngreso;
		}

	}
}

function validarTodos(){
    var contador = 0;
	var calculoNotas = 0;
	var parcial = 0;
    for(i=0; i<5; i++){
        var valorArreglo = arreglo[i];
        if( document.getElementById(valorArreglo).innerHTML == "Nota Válida")
        {
            contador++;
        }
    }
    if(contador == 5){
        document.getElementById('mensajefinal').innerHTML = "Notas Agregadas Exitosamente!"
		parcial = ((parseFloat(nota1.value) + parseFloat(nota2.value) + parseFloat(nota3.value) + parseFloat(nota4.value))/4);
		calculoNotas = parseFloat(parcial)*0.6 + (parseFloat(notaExamen.value)*0.4);
		document.getElementById('calculoNotas').innerHTML = parseFloat(calculoNotas);
		if(calculoNotas >= 4) {
			if(parcial < 4) {
				document.getElementById('aprobacion').innerHTML = "El alumno REPROBÓ por nota parcial " + parcial;
			}
			else {
				document.getElementById('aprobacion').innerHTML = "El alumno APROBÓ con promedio final " + parseFloat(calculoNotas)
			}
		}
		else {
			document.getElementById('aprobacion').innerHTML = "El alumno REPROBÓ con promedio final " + parseFloat(calculoNotas)
		}
    }
}
