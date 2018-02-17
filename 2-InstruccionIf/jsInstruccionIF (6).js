function Mostrar()
{
    //tomo la edad por ID 

    var edad;

     edad = document.getElementById("edad").value;

    // establezco la condicion por if junto con su condicion a cumplir

    if ( edad >=18 )

    {
        alert("Usted es mayor de edad");
    }

    //muestro por alert el mensaje dentro del algoritmo if , SI se cumple la funcion

    else if ( edad < 13 ) 

    {
        alert("Usted es menor de edad");
    }

    else 

    {
        alert("Usted es un adolescente");
    }



}//FIN DE LA FUNCIÓN