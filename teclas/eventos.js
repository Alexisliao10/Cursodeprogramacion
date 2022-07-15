var teclas = {
    UP: 38,
    DOWN: 40,
    RIGHT: 39,
    LEFT: 37
};

document.addEventListener("keydown", dibujarTeclado);

var cuadrito = document.getElementById("areaDeDibujo")
var papel = cuadrito.getContext("2d")
var x = 150;
var y = 150;

dibujarlinea("red", 149, 149, 151, 151, papel)

function dibujarTeclado(evento)
{
    var colorcito = "blue"
    var movimiento = 5;
    
    switch(evento.keyCode)
    {
        case teclas.UP:
            dibujarlinea(colorcito, x, y, x, y - movimiento, papel);
            y = y - movimiento;
        break;
        case teclas.DOWN:
            dibujarlinea(colorcito, x, y, x, y + movimiento, papel);
            y = y + movimiento;
        break;
        case teclas.RIGHT:
            dibujarlinea(colorcito, x, y, x + movimiento, y, papel);
            x = x + movimiento;
        break;
        case teclas.LEFT:
            dibujarlinea(colorcito, x, y, x - movimiento, y, papel);
            x = x - movimiento;
        break;
    }
}

function dibujarlinea(color, xinicial, yinicial, xfinal, yfinal, lienzo)
{
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 3;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}