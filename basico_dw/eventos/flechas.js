document.addEventListener("keyup", dibujarTeclado);

let teclas = {
    up : 38,
    down : 40,
    left : 37,
    right : 39
};

function dibujarLinea(color, x_inicial, y_inicial, x_final, y_final, lienzo) {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 3;
    lienzo.moveTo(x_inicial, y_inicial);
    lienzo.lineTo(x_final, y_final);
    lienzo.stroke();
    lienzo.closePath();
}

let cuadro = document.getElementById("area_dibujo");
let papel = cuadro.getContext("2d");
let x = 150;
let y = 150;

dibujarLinea("red",149,149,151,151,papel);

function dibujarTeclado(evento){
    //alert("Presionaste una tecla");
    //console.log(evento);
    let colors = "blue";
    let mov = 10;
    if(evento.keyCode == teclas.up){
        dibujarLinea(colors, x, y, x, y - mov, papel);
        y = y - mov;
    }
    if(evento.keyCode == teclas.down){
        dibujarLinea(colors, x, y, x, y + mov, papel);
        y = y + mov;
    }
    if(evento.keyCode == teclas.left){
        dibujarLinea(colors, x, y, x - mov, y, papel);
        x = x - mov;
    }
    if(evento.keyCode == teclas.right){
        dibujarLinea(colors, x, y, x + mov, y, papel);
        x = x + mov;
    }
}