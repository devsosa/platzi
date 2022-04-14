let imagenes = [];
imagenes["Cauchin"] = "img/vaca.webp";
imagenes["Pokacho"] = "img/pollo.webp";
imagenes["Tocinauro"] = "img/cerdo.webp";

class Pakiman{
    constructor(n,v,a){
        //alert("constructor");
        this.imagen = new Image();
        this.nombre = n;
        this.vida = v;
        this.ataque = a;

        this.imagen.src = imagenes[this.nombre];
    }

    hablar(){
        alert(this.nombre);
    }

    mostrar(){
        document.body.appendChild(this.imagen);
        document.write("<p>");
        document.write("<strong>" + this.nombre + "</strong> </p>");
        document.write("Vida: " + this.vida + "<br>");
        document.write("Ataque: " + this.ataque);
        document.write("</p>");
    }
}

//let cauchin = new Pakiman("Cauchin",100,30);
//let pokacho = new Pakiman("Pokacho",80,50);
//let tocinauro = new Pakiman("Tocinauro",120,40);

let coleccion = [];
coleccion.push(new Pakiman("Cauchin",100,30));
coleccion.push(new Pakiman("Pokacho",80,50));
coleccion.push(new Pakiman("Tocinauro",120,40));

for(p of coleccion){
    p.mostrar();
}

//pokacho.mostrar();
//cauchin.mostrar();
//tocinauro.mostrar();