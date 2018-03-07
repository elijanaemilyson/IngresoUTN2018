//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
    var importe;
    var ivaporcentaje;
    var ivafinal;

    importe = prompt("Ingrese el importe: " );
    importe = parseFloat(importe);
    ivaporcentaje = importe * 0.21;
    ivafinal = ivaporcentaje + importe; 
    
    document.getElementById("importe").value = ivafinal.toFixed(2);
    
	
}

