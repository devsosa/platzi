class Billete{
    constructor(v,c){
        this.valor = v;
        this.cantidad = c;
    }
}

let caja = [];
let entregado = [];
caja.push(new Billete(100, 10));
caja.push(new Billete(50, 10));
caja.push(new Billete(20, 30));
caja.push(new Billete(10, 10));
caja.push(new Billete(5, 5));

let dinero = 0;
let div = 0;
let papeles = 0;

let b = document.getElementById("extraer");
let r = document.getElementById("res");
b.addEventListener("click", entregarDinero);



function entregarDinero(){

    let t = document.getElementById("dinero");
    dinero = parseInt(t.value);

    for(let bi of caja){

        if(dinero > 0){
            div = Math.floor(dinero / bi.valor);
            //console.log(div);

            if(div > bi.cantidad){
                papeles = bi.cantidad;
            }else{
                papeles = div;
            }

            entregado.push(new Billete(bi.valor, papeles));
            dinero = dinero - (bi.valor * papeles);
            
        }
    }

    if(dinero > 0){
        //console.log("Los fondos son insuficientes, introduzca una cantidad menor.")
        r.innerHTML = "El cajero no cuenta con esos fondos, introduzca una cantidad menor.";
    }else{
        for(let e of entregado){
            if(e.cantidad > 0){
                r.innerHTML += (e.cantidad + " billetes de $" + e.valor + "<br>");
            }
        }
    }

    console.log(entregado);
}
//entregarDinero();