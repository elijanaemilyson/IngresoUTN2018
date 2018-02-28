function Mostrar()
{

var numero;
var contadorPar=0;
var i;

numero = prompt("Ingrese numeros");

for(i=1 ; i<=numero ; i++)
{
    if( i % 2 == 1 ){
        continue;
    }
    contadorPar++;
    console.log(i);
}

console.log("Los numeros pares son = " + contadorPar );

}//FIN DE LA FUNCIÓN