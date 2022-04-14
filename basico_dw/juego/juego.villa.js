let vp = document.getElementById("dibujo");
let papel = vp.getContext("2d");
let cantidad = aleatorio(5, 10);

let fondo = {
    url: "img/tile.webp",
    cargaOk: false,
};

let cerdo = {
    url: "img/cerdo.webp",
    cargaOk: false,
};

let pollo = {
    url: "img/pollo.webp",
    cargaOk: false,
};

let vaca = {
    url: "img/vaca.webp",
    cargaOk: false,
};

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdo);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVaca);

function cargarFondo(){
    fondo.cargaOk = true;
    dibujar();
}

function cargarCerdo(){
    cerdo.cargaOk = true;
    dibujar();
}

function cargarPollo(){
    pollo.cargaOk = true;
    dibujar();
}

function cargarVaca(){
    vaca.cargaOk = true;
    dibujar();
}

function dibujar(){
    if(fondo.cargaOk){
        papel.drawImage(fondo.imagen, 0,0);
    }
    if(cerdo.cargaOk){
        for(let c=0; c < cantidad; c++){
            var x = aleatorio(0, 420);
            var y = aleatorio(0, 420);
            papel.drawImage(cerdo.imagen, x, y);
        }
    }
    if(pollo.cargaOk){
        for(let p=0; p < cantidad; p++){
            var x = aleatorio(0, 420);
            var y = aleatorio(0, 420);
            papel.drawImage(pollo.imagen, x, y);
        }
    }
    if(vaca.cargaOk){
        for(let v=0; v < cantidad; v++){
            var x = aleatorio(0, 420);
            var y = aleatorio(0, 420);
            papel.drawImage(vaca.imagen, x, y);
        }
    }
}

//let z = aleatorio(10,20);

// for(let i=0; i < 10; i++){
//     z = aleatorio(10,20);
//     document.write(z+", ");
// }

//document.write(z);

function aleatorio(min, maxi){
    let resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;

    return resultado;
}