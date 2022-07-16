var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");
var teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
};

var fondo = {
    url: "tile.png",
    cargaOK: false
};
var vaca = {
	url: "vaca.png",
	cargaOK: false,
};
var cerdo = {
    url: "cerdo.png",
    cargaOK: false,
    x: 0,
    y: 0
};
var pollo = {
    url: "pollo.png",
    cargaOK: false
};

var cantidad = aleatorio(1, 10);

fondo.objeto = new Image();
fondo.objeto.src = fondo.url;
fondo.objeto.addEventListener("load", cargarFondo);

vaca.objeto = new Image();
vaca.objeto.src = vaca.url;
vaca.objeto.addEventListener("load", cargarVacas);

cerdo.objeto = new Image();
cerdo.objeto.src = cerdo.url;
cerdo.objeto.addEventListener("load", cargarCerdos);

pollo.objeto = new Image();
pollo.objeto.src = pollo.url;
pollo.objeto.addEventListener("load", cargarPollos);

function cargarFondo() {
    fondo.cargaOK = true;
    dibujar();
}
function cargarVacas() {
    fondo.cargaOK = true;
    dibujar();
}
function cargarCerdos() {
    fondo.cargaOK = true;
    dibujar();
}
function cargarPollos() {
    fondo.cargaOK = true;
    dibujar();
}

function aleatorio(min, maxi) {
    var resultado;
    resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
    return resultado;

}

function dibujar() {
    if(fondo.cargaOK); {
    papel.drawImage(fondo.objeto, 0, 0); 
}
    if(vaca.cargaOK); {
    for(var v=0; v < cantidad; v++) {
        var x = aleatorio(0, 5);
        var y = aleatorio(0, 5);
        var x = x * 75;
        var y = y * 75;
        papel.drawImage(vaca.objeto, x, y);
    }
}
if(cerdo.cargaOK); {
    for (var v=0; v < cantidad; v++) {
        var x = aleatorio(0, 5);
        var y = aleatorio(0, 5);
       var x = x * 75;
        var y = y * 75;
        papel.drawImage(cerdo.objeto, x, y);
    }
}
    if(pollo.cargaOK); {
    for(var v=0; v < cantidad; v++) {
        var x = aleatorio(0, 5);
        var y = aleatorio(0, 5);
        var x = x * 75;
        var y = y * 75;
    papel.drawImage(pollo.objeto, x, y);
    }
}
}

function moverCerdo(x, y) {
	papel.drawImage(cerdo.objeto, x, y);
}

function dibujarOtraVez() {
	if(fondo.cargaOK) {
		papel.drawImage(fondo.objeto , 0 , 0);
}
	 if(vaca.cargaOK) {
        for(var v = 0; v < cantidad; v++) {
            var x = aleatorio(0, 5);
            var y = aleatorio(0, 5);
            var x = x * 75;
            var y = y * 75;
            papel.drawImage(vaca.objeto, x, y);
            console.log(cantidad);
        }
	 }
	 if(pollo.cargaOK) {
        for(var v = 0; v < cantidad; v++) {
            var x = aleatorio(0, 5);
            var y = aleatorio(0, 5);
            var x = x * 75;
            var y = y * 75;
            papel.drawImage(vaca.objeto, x, y);for(var p = 0; p < cantidad; p++) {
			console.log(cantidad);
		}
	 }
}
}

document.addEventListener("keydown", moverTecla);

function moverTecla(evento) {
	var movimiento = 5;
	switch(evento.keyCode) {
		case teclas.UP:
		dibujarOtraVez();
		moverCerdo(cerdo.x, cerdo.y);
		cerdo.y = cerdo.y - movimiento;
		break;
		case teclas.DOWN:
		dibujarOtraVez();
		moverCerdo(cerdo.x, cerdo.y);
		cerdo.y = cerdo.y + movimiento;
		break;
		case teclas.LEFT:
		dibujarOtraVez();
		moverCerdo(cerdo.x, cerdo.y);
		cerdo.x = cerdo.x - movimiento;
		break;
		case teclas.RIGHT:
		dibujarOtraVez();
		moverCerdo(cerdo.x, cerdo.y);
		cerdo.x = cerdo.x + movimiento;
		break;
		default:
		console.log("Otra tecla");
		break;
	}
}