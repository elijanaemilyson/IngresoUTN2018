function Mostrar()
{
    var numero;
    var i;
    var contDivisor=0;
    //en la variable de control . van a estar guardadas la Q de divisores que voy obteniendo 

    numero = prompt("Ingrese numeros");
    //pido el numero por prompt

  for(i=1 ; i<=numero ; i++)
   /*como tengo que evaluar en una operacion de division cuales son los numeros con mas de un 
    divisor de un numero se tienen que dividir muchas veces (iterar) */
  {
    if( numero % i == 0 )
    /*como tengo que seleccionar una cierta condicion voy a evaluar (en if) para contar los 
    divisores  */
    {
    contDivisor++;
    console.log(i);
    }
    // (i) muestra el divisor y el contador acumula

  }
   //muestro la cantidad de divisores del numero ingresado 
   
console.log("Los DIVISORES de " + numero + " son = " + contDivisor );


}//FIN DE LA FUNCIÓN