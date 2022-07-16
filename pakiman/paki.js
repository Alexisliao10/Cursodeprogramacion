var imagenes = [];
imagenes["cauchin"] = "/AnimalesPNG/vaca.png";
imagenes["pokacho"] = "/AnimalesPNG/pollo.png";
imagenes["tocinauro"] = "/AnimalesPNG/cerdo.png";

console.log(imagenes);
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
console.log(cauchin, pokacho, tocinauro);

<<<<<<< HEAD
pokacho.mostrar();
tocinauro.mostrar();
cauchin.mostrar();
=======
var coleccion = [];
coleccion.push(cauchin);
coleccion.push(pokacho);
coleccion.push(tocinauro);

console.log(coleccion);
>>>>>>> 31c486b (no pude separa las clases con las funciones en diferentes .js)
