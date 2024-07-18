const horas = document.querySelector("#horas");
const minutos = document.querySelector("#minutos");
const segundos = document.querySelector("#segundos");

const relogio = setInterval(function time(){
    let dataHoje = new Date();
    let hrs = dataHoje.getHours();
    let mins = dataHoje.getMinutes();
    let segs = dataHoje.getSeconds();

    if(hrs < 10){
        hrs = "0" + hrs;
    }
    if(mins < 10){
        mins = "0" + mins;
    }
    if(segs < 10){
        segs = "0" + segs;
    }

    horas.textContent = hrs;
    minutos.textContent = mins;
    segundos.textContent = segs;

})