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