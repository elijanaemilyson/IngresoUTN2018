function Mostrar()
{

	var contadorNeg=0;
	var numeros;
	var sumaNegativo;
	var sumaPositivo;
	var contadorPosi=0;
	var contadorCeros;
	var respuesta=true;
	
	/*Pedir numeros hasta el usuario quiera , estos datos entraran por prompt y seguira ingresando numeros por confirm
	 por una cantidad indefinida de veces*/

	do
	{
		numeros = parseInt(prompt("Ingrese numeros para operar"));

		if ( 0 > numeros ){
			sumaNegativo = sumaNegativo + numeros;
			contadorNeg++;
		}

		else if ( 0 < numeros ){
			sumaPositivo = sumaPositivo + numeros;
			contadorPosi++;
		}
		else{
			contadorCeros++;

		}
		if (numeros % 2 == 0){
			contadorPar++;
		}



		respuesta = confirm("¿Desea seguir?");

	}while( respuesta == true )

		document.write("La suma de los numeros negativos es = " + sumaNegativo + "<br/>");
		document.write("La suma de los numeros positivos es = " + sumaPositivo + "<br/>");
		document.write("Los numeros positivos son = " + contadorPosi + "<br/>");
		document.write("Los numeros negativos son = " + contadorNeg + "<br/>");



}//FIN DE LA FUNCIÓN