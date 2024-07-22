const horas = document.querySelector("#horas");
const minutos = document.querySelector("#minutos");
const segundos = document.querySelector("#segundos");

let relogio = setInterval(function time(){
    let dateHJ = new Date();
    let hrs = dateHJ.getHours();
    let min = dateHJ.getMinutes();
    let seg = dateHJ.getSeconds();

    if(hrs < 10){
        hrs = "0" + hrs;
    }
    if(min < 10){
        min = "0" + min;
    }
    if(seg < 10){
        seg = "0" + seg;
    }

    horas.innerText = hrs;
    minutos.innerText = min;
    segundos.innerText = seg;
})