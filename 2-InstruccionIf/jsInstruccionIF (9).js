function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 

	var numeroAleatorio;
	
	numeroAleatorio = Math.floor(Math.random () * 10 ) + 1;

	/* multiplico por el numero máximo(es el n° maximo que puedo obtener con el math random)
	 y le sumo el numero minimo de donde quiero que "arranque" ej: math random = (0,999584)*10 (9,99584) + 1 (10,99584) 
	 y con math floor lo redondeo hacia abajo osea = 10 */

	alert ( numeroAleatorio );

	


}//FIN DE LA FUNCIÓN