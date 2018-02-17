function Mostrar()
{
//tomo la edad ( dato ) por ID declarando en variable 
//declaro la variable del estado civil para seleccionar el dato
    var edad;
    var estadocivil;

    edad = document.getElementById("edad").value;
    estadocivil = document.getElementById("estadoCivil").value;

/*en este caso quiero que mi condicion para funcionar se cumpla cuando es mayor de edad (18 años)
 y el estado civil sea soltero*/
 
    if ( edad >=18 && estadocivil == "Soltero")
    {
        alert("Es soltero y NO es menor");
    }
	


}//FIN DE LA FUNCIÓN