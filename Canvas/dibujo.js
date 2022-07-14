var texto = document.getElementById("texto_lineas")
var boton = document.getElementById("boton")
boton.addEventListener("click", dibujoPorClick );

var d = document.getElementById("dibujito");
var ancho = d.width;
var lienzo = d.getContext("2d")

function dibujarlinea(color, xinicial, yinicial, xfinal, yfinal)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();   
}

function dibujoPorClick()
{
    var linea = parseInt(texto.value);
    var l = 0;
    var xi, yi, xf, yf; 
    var colores = "blue";
    var espacio = ancho / linea;

    dibujarlinea(colores, 1, 1, 1, ancho - 1)
    dibujarlinea(colores, ancho - 1, ancho - 1, ancho - 1, 1)
    dibujarlinea(colores, 1, ancho - 1, ancho - 1, ancho - 1)
    dibujarlinea(colores, ancho - 1, 1, 1, 1)

    for(l = 0; l < linea; l++)
    {
        x = espacio * l;
        y = espacio * (l + 1);
        dibujarlinea(colores, 0, y, x, 300);
        dibujarlinea(colores, 300, y, x, 0);
        console.log("linea " + l);
    }
}
