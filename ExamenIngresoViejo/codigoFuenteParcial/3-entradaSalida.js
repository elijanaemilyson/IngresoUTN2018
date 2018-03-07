//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
    var largo;
    var ancho;
    var perimetro;
    var alambre;

    largo = document.getElementById("largo").value;
    ancho = document.getElementById("ancho").value;

    perimetro = largo * 2 + ancho * 2;

    alambre = perimetro * 6;
    
    alert("El perimetro del terreno es " + perimetro + "mts por lo tanto tiene que usar " + alambre + "mts de alambre");

}

