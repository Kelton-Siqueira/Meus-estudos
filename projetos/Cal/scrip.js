const numeros = document.querySelectorAll('button')
const tela = document.querySelector('.tela')
const iglua = document.querySelector('.zero')
const beck = document.querySelector('.beck')
const ponto = document.querySelector('.ponto')

function beckClear() {
    beck.addEventListener('click', (e) => {
        e.preventDefault()
        let str
        str = tela.innerHTML.slice(0, tela.innerHTML.length - 1)
        tela.innerHTML = str

    })
}

function clear() {
    const clear = document.querySelector('.clear')
    clear.addEventListener('click', () => {
        tela.innerText = ''

    })
}
function num(numeros) {
    numeros.forEach(e => {
        if (e.innerText == '=') {
            return
        }
        if (e.innerHTML == '&lt;') {
            beckClear()
        }


        else {
            e.addEventListener('click', () => {
                tela.innerHTML += e.innerText
                console.log('entrou no els')
                if (e.innerHTML == '.' && tela.innerHTML.includes('.')) {
                    ponto.innerHTML = ''
                
                }
            })
        }
    })
}
function somar() {
    let tela2 = document.querySelector('.tela').innerText
    tela.innerHTML = eval(tela2)
    if (tela) {
        tela.innerHTML = eval(tela2)
    } else {
        tela.innerText = 'nenhum comando'
    }

}





num(numeros)
clear()



/*  */