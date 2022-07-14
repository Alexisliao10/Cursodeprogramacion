var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d")
var linea = 30
var l = 0;
var yi, xf;
var colores = "blue";

dibujarlinea(colores, 1, 1, 1, 300)
dibujarlinea(colores, 300, 300, 300, 1)
dibujarlinea(colores, 1, 299, 299, 299)
dibujarlinea(colores, 299, 1, 1, 1)

for(l = 0; l < linea; l++)
{
    yi = 10 * l;
    xf = 10 * (l + 1);
    dibujarlinea(colores, 0, yi, xf, 300);
    console.log("linea " + l);
}

for(l = 0; l < linea; l++)
{
    yi = 10 * l;
    xf = 10 * (l + 1);
    dibujarlinea(colores, 300, yi, xf, 0);
    console.log("linea " + l);
}


function dibujarlinea(color, xinicial, yinicial, xfinal, yfinal)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();   
}
