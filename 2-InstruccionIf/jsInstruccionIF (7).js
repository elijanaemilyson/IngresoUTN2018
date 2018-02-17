function Mostrar()
{
//tomo la edad que quiero condicionar en la funcion de mi algoritmo

    var edad ;
    var estadocivil;

    edad = document.getElementById("edad").value;
    estadocivil = document.getElementById("estadoCivil").value;
    

//establezco la condicion deseada en if 

    if ( edad < 18 && estadocivil !="Soltero" )

//la condicion edad es menor a 18 años Y el estado civil elegido NO ES soltero 
    {
    alert("Usted es demasiado pequeño para NO ser soltero");
    }

//informo por mensaje al usuario 






	


}//FIN DE LA FUNCIÓN