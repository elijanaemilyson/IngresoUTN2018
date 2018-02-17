function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	
	var numeroAleatorio;

	numeroAleatorio = Math.floor( Math.random() * 10 ) + 1; 

	if ( numeroAleatorio >=9 )
	{
		alert("EXCELENTE");
	}

	else if ( numeroAleatorio < 9 && numeroAleatorio >=4 )
	{
		alert("APROBO");
	}

	else
	{
		alert("Vamos la próxima se puede");
	}

	console.log(numeroAleatorio);
	//para ver el valor exacto en la consola 

}//FIN DE LA FUNCIÓN