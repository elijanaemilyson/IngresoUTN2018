function Mostrar()
{
//tomo la edad por id dentro , declarando la variable

var edad;

edad = document.getElementById("edad").value;

if  (!( edad >=13 && edad <18 ) )

{
    alert("Usted NO es adolescente");
}



}//FIN DE LA FUNCIÓN