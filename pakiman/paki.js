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
		this.imagenes = new Image();
		this.tipo = "tierra";

		this.imagenes.src = imagenes[this.nombre];
	}
	hablar() {
		alert(this.nombre);
	}
}

//cauching(vaca), pokacho(pollo), tocinauro(cerdo)
var cauchin = new Pakiman("cauchin", 100, 30);
var pokacho = new Pakiman("pokacho", 80, 50);
var tocinauro = new Pakiman("tocinauro", 120, 40);
console.log(cauchin, pokacho, tocinauro);