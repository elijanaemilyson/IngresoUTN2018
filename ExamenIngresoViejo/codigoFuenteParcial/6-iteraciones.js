//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
    var importe;
    var contador=0;

    while(contador < 7){

        importe = prompt("Ingrese un importe");
        
        while (importe <= 0){
            importe = prompt("Reingrese un importe");
        }

        contador++;
    }

    alert(importe);

    /*
    var
    
    importeVentas;
    var contador = 0;

    importeVentas = prompt("Ingrese un importe");
    importeVentas = parseInt(importeVentas);

    
    do {
        while ( contador < 7 )
        {
        
            contador++;

            if ( contador == 1  )
            {	
                importeVentasMax = importeVentas;
                importeVentasMin= importeVentas;
            }else
            {
                if (importeVentas > importeVentasMax)
                {
                    importeVentasMax = importeVentas;
                }
                else {
                    importeVentasMin = importeVentas;
                }
            }
    
        }//while( importeVentas > 0 )
    
        alert("El numero minimo es: " + importeVentasMin + " y el numero maximo es: " + importeVentasMax);
    }*/
}
