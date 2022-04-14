let d = document.getElementById("dibujo");

//Llamando caja de texto y boton
let txt_lineas = document.getElementById("txt_lineas");
let btn_enviar = document.getElementById("btn_enviar");
btn_enviar.addEventListener("click", dibujoPorClick);

//Definiendo el espacio para el dibujo
let lienzo = d.getContext("2d");

//obteniendo el ancho del canvas
let ancho = d.width;

function dibujarLinea(color, x_inicial, y_inicial, x_final, y_final) {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(x_inicial, y_inicial);
    lienzo.lineTo(x_final, y_final);
    lienzo.stroke();
    lienzo.closePath();
}

//Funcion que se ejecuta con el boton
function dibujoPorClick(){

    let x = parseInt(txt_lineas.value);
    var lineas = x;
    var espacio = ancho / lineas;
    var l = 0;
    var yi, xf;

    while (l < lineas) {
        yi = espacio * l;
        xf = espacio * (l + 1);
        //xi = 10 * l;
        //yf = 10 * (l + 1);
        dibujarLinea("#AAF",0,yi,xf,300);
        dibujarLinea("green",300,yi,xf,0);
    
        l++;
        //l2--;
    }
    
    let linea = x;
    let cont = 0;
    while (linea > 1) {
        xi = espacio * linea;
        yf = espacio * (cont + 1);
        //xi = 10 * l;
        //yf = 10 * (l + 1);
        dibujarLinea("grey", xi, 0, 0, yf);
        dibujarLinea("red", 300, yf, xi, 300);
        linea--;
        cont++;
        //console.log(xi);
        //l2--;
    }

    //alert("Le diste click " + x);
}

