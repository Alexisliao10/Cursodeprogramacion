var imagenes = [];
imagenes["cauchin"] = "/AnimalesPNG/vaca.png";
imagenes["pokacho"] = "/AnimalesPNG/pollo.png";
imagenes["tocinauro"] = "/AnimalesPNG/cerdo.png";
class Pakiman {
	constructor(name, health, attack) {
		this.nombre = name;
		this.vida = health;
		this.ataque = attack;
		this.imagen = new Image();
		this.tipo = "tierra";

		this.imagen.src = imagenes[this.nombre];
	}
	hablar() {
		alert(this.nombre);
	}
	mostrar() {
		document.body.appendChild(this.imagen);
		document.write("<p>");
		document.write("<strong>" + this.nombre + "</strong><br>");
		document.write("Vida: " + this.vida + "<br>");
		document.write("Ataque: " + this.ataque + "<hr>");
		document.write("</p>");
	}
}


//cauching(vaca), pokacho(pollo), tocinauro(cerdo)
var cauchin = new Pakiman("cauchin", 100, 30);
var pokacho = new Pakiman("pokacho", 80, 50);
var tocinauro = new Pakiman("tocinauro", 120, 40);

var coleccion = [];
coleccion.push(new Pakiman("cauchin", 100, 30));
coleccion.push(new Pakiman("pokacho", 80, 50));
coleccion.push(new Pakiman("tocinauro", 120, 40));

console.log(coleccion)

for(var pakin of coleccion) {
	pakin.mostrar();
}