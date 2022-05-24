const relogio = document.querySelector(".relogio");
const iniciar = document.querySelector(".iniciar");
const pausar = document.querySelector(".pausar");
const zerar = document.querySelector(".zerar");


let segundo= 0;
let timer;
function criasegundoshora(segundos){
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString("pt-BR",{
        hour12:false,
        timeZone:"UTC"
    })
}


function iniciaRelogio() {    // essa funcao vai iniciar o relogio
    timer = setInterval(function() {     
      segundo++;    // adiciono 1 seg a cada vez
      relogio.innerHTML = criasegundoshora(segundo);
    }, 1000);   // a cada 1 segundo, iso vai acontecendo
  }

document.addEventListener("click", function(e){
    const el = e.target;
    
    if(el.classList.contains("iniciar")){
        clearInterval(timer)
        relogio.classList.remove("pausado");
        iniciaRelogio();
    };

    if(el.classList.contains("pausar")){
        clearInterval(timer);
        relogio.classList.add("pausado");
    };

    if(el.classList.contains("zerar")){
        clearInterval(timer);
        relogio.classList.remove("pausado");
        segundo = 0;
        relogio.innerHTML = "00:00:00"
    };
});