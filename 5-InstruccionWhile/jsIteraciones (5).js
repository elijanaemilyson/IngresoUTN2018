function Mostrar()
{
//pido al usuario que declare su sexo con f o m para referirse a femenino o masculino
var sexo = prompt("ingrese f ó m .");

while (!(sexo == "f" || sexo == "m") ) 
{
  sexo =  prompt("Solo ingrese f o m");
}

document.getElementById("Sexo").value = sexo ; 

if ( sexo == "f" )
{
    document.getElementById("Sexo").value = "femenino" ; 
}

else if ( sexo == "m")
{
    document.getElementById("Sexo").value = "masculino";
}


}//FIN DE LA FUNCIÓN