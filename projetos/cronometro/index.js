const iniciar = document.querySelector('[w1]')
const parar = document.querySelector('[w2]')
const reiniciar = document.querySelector('[w3]')
const cronometr0 = document.querySelector('.numeros')
var seg = 0
var min = 0
function start(){
    this.intervalo =  setInterval(() => {
        conter()
    }, 1000);
}


function conter(){
    seg++
    if(seg===60){
        min++
        seg=00
    }
    cronometr0.innerText = `${min} : ${seg}`
}

function stop(){
    clearInterval(this.intervalo)
}

function rec(){
    cronometr0.innerText = `${min =00}: ${seg = 00}`
}


