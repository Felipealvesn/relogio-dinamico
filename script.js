let horas = document.querySelector("#horas")
let minutos = document.querySelector("#minutos")
let segundos = document.querySelector("#segundos")

const clock = setInterval(function time(){
    let dataDeHJ = new Date()
    let hrs = dataDeHJ.getHours()
    let minu = dataDeHJ.getMinutes()
    let segun = dataDeHJ.getSeconds()

    if(hrs < 10){
        hrs = "0" + hrs;
    }
    if(minu < 10){
        minu = "0" + minu;
    }
    if(segun < 10){
        segun = "0" + segun;
    }

    horas.textContent = hrs;
    minutos.textContent = minu;
    segundos.textContent = segun;
})