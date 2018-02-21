function Mostrar()
{
//pido al usuario que declare su sexo con f o m para referirse a femenino o masculino
var sexo = prompt("ingrese f ó m .");
sexo = sexo.toLowerCase();

while (!(sexo == "f" || sexo == "m" || sexo == "F" || sexo == "M" ) )

// tambien puedo convertir las respuestas escritas en mayusculas en minusculas  
{
  sexo =  prompt("Solo ingrese f o m");
  sexo = sexo.toLowerCase();
}



if ( sexo == "f" )
{
    document.getElementById("Sexo").value = "femenino" ; 
}

else
{
    document.getElementById("Sexo").value = "masculino";
}


}//FIN DE LA FUNCIÓN