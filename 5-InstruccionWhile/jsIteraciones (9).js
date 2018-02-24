function Mostrar()
{

	var contador=0;
	var max;
	var min;
	var numero;
	var flag=0;

	// declarar variables
	
	var respuesta=true;

	do
	{	numero = parseInt( prompt("Ingrese numeros "));

		if (contador == 0)
		{
			max = numero;	
			min = numero;
			contador++;

			//acumulador+=numero
			//contador++
			//contador+=1
		}
		if ( numero > max )
		{	
			 max=numero;	

		}
		if ( numero < min)	
		{	
			min = numero;
		}
		
		respuesta = confirm("¿Desea seguir?");

	}while (respuesta == true);

	

	document.getElementById("maximo").value=max;
	document.getElementById("minimo").value=min;



}//FIN DE LA FUNCIÓN