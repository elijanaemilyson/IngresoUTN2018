function Mostrar()
{
//tomo la edad 

    var edad;

     edad = document.getElementById("edad").value;

    // establezco la condicion por if junto con su condicion a cumplir

    if ( edad >=18 )

    {
        alert("Usted es mayor de edad");
    }

    //muestro por alert el mensaje dentro del algoritmo if , SI se cumple la funcion

    else 

    {
        alert("Usted es menor de edad");
    }

    // else significa todo lo demas , se ejecuta cuando if no se ejecutar

}//FIN DE LA FUNCIÓN