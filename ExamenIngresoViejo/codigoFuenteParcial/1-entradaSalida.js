//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
    // leer base por id 
    
    var base;
    var perimetro;

    base = document.getElementById("lado").value;
    perimetro = base * 3;
    
    alert("El perimetro de un triangulo equilatero de " + base + " de base , es de : " + perimetro);

	
	
}

