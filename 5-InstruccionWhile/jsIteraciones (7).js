function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='s';
	var numero;
	var promedio;

	do 
	{
		numero = parseInt( prompt("Ingrese un numero"));
		acumulador = acumulador + numero;
		contador ++;

		respuesta = prompt("Desea continuar ?");

	} while ( respuesta == 's' );

promedio = acumulador / contador; 

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=promedio;

}//FIN DE LA FUNCIÓN