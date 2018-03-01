function Mostrar()
{
    //quiero numeros decrecientes del 10 al 0 
    /*la variable i establece el punto de inicio , el numero que busco es menor a 10 porque es 
    decreciente y al ser decreciente va restando de a uno en uno constantemente , esto es el contador en este caso 
    cuenta en reversa*/
    for(i=10 ; i >=0 ; i--)
    {
       document.write(i + "<br>");
       console.log(i);
    }

}