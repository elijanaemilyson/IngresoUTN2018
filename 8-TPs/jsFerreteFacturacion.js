/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{ 
    var precioUno; 
    var precioDos;
    var precioTres;

    var total;

    precioUno= parseFloat(document.getElementById("PrecioUno").value);
    precioDos= parseFloat(document.getElementById("PrecioDos").value);
    precioTres= parseFloat(document.getElementById("PrecioTres").value);

     total = (precioUno + precioDos + precioTres);

	alert("La suma es $ " +  total );
}
function Promedio () 
{
	var precioUno; 
    var precioDos;
    var precioTres;

    var total;

    precioUno= parseFloat(document.getElementById("PrecioUno").value);
    precioDos= parseFloat(document.getElementById("PrecioDos").value);
    precioTres= parseFloat(document.getElementById("PrecioTres").value);

     total = (precioUno + precioDos + precioTres);
     total = total / 3;

    alert("El promedio de la suma es : " + total.toFixed(2));
}
function PrecioFinal () 
{
	var precioUno; 
    var precioDos;
    var precioTres;
    var precioIva;
    var total;

    precioUno= parseFloat(document.getElementById("PrecioUno").value);
    precioDos= parseFloat(document.getElementById("PrecioDos").value);
    precioTres= parseFloat(document.getElementById("PrecioTres").value);

     total = (precioUno + precioDos + precioTres);
     total = precioIva * 1.21;

	alert("El precio total más IVA es $ " +  total );
}