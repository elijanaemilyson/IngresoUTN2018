function Mostrar()
{
//Pido los numeros 

	var contador=0;
	var acumulador=0;
	var numero;

	while ( contador <5 ) 
		
	{	
		numero = parseInt( prompt("Ingrese el numero"));
		acumulador = acumulador + numero;
		contador ++;
	}

/* en sources se puede ver como la constante (el contador) va acumulando valores fijos y como la variable
(acumulador)va tomando diferentes valores por prompt  */

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN