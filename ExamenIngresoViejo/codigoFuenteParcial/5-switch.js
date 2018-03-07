//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
    var mesdelAño;

    mesdelAño = prompt("Ingrese el mes: ");

    switch(mesdelAño){
        case "enero":
        case "febrero":
            alert("Veranito!!!!");
        break;

        default:
            alert("extraño enero y febrero!!!");

    }
}

