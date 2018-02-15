function Mostrar()
{
//Pedir el dato

	var numero = prompt("ingrese un número entre 0 y 10.");

//Con While pido que la condicion sea verdadera en este caso quiero solo numeros entre 0 y 10

while ( numero <0 || numero >10 )

{
	numero = prompt("Ingrese solamente numeros del 1 al 10");
}

alert("Correcto!");


}//FIN DE LA FUNCIÓN