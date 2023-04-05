const grid = document.querySelector('.grid')
const spanPlayer = document.querySelector('.player')
const timer = document.querySelector('.timer')

const caracte = [
    'beth',
    'jerry',
    'jessica',
    'morty',
    'pessoa-passaro',
    'pickle-rick',
    'rick',
    'summer',
    'meeseeks',
    'scroopy'

]
let firstCard = ''
let secondCard = ''
const checkEndGame = ()=>{
    const disled = document.querySelectorAll('.disblerCard')
    if(disled.length === 20){
        alert('parabens, você conseguiu')
        console.log('voce consguiu')
        clearInterval(this.loop)
    }
}
const checkCard = ()=>{
    const firstCardCarcter = firstCard.getAttribute('data-character')
    const secondCardCarcter = secondCard.getAttribute('data-character')
    if(firstCardCarcter === secondCardCarcter){
        firstCard.firstChild.classList.add('disblerCard')
        secondCard.firstChild.classList.add('disblerCard')
        firstCard = ''
        secondCard = ''
    }
    else{
        setTimeout(() => {
            firstCard.classList.remove('revil-card')
            secondCard.classList.remove('revil-card')
            firstCard = ''
            secondCard = ''
            
        },500);
        
    }
    checkEndGame()
}
const revelCard = ({ target })=>{
  if(target.parentNode.className.includes('revil-card'))return

  if(firstCard === ''){
    target.parentNode.classList.add('revil-card')
    firstCard = target.parentNode
  }else if(secondCard === ''){
    target.parentNode.classList.add('revil-card')
    secondCard = target.parentNode
    checkCard()
  }
  
}

const createlemento = (tag, classElemento)=>{
    const elemento = document.createElement(tag)
    elemento.className = classElemento
    return elemento
}

const createCard = (person)=>{
    const card = createlemento('div', 'card')
    const front = createlemento('div', 'front face')
    const back = createlemento('div', 'beck face')

    front.style.backgroundImage = `url('../imagens/${person}.png')`
    card.appendChild(front)
    card.appendChild(back)

    card.addEventListener('click', revelCard)

    card.setAttribute('data-character', person)
   return card
}


const loadGame = ()=>{
    const Duplication = [...caracte, ...caracte]
    const shuft = Duplication.sort(()=>Math.random() - 0.5)
    shuft.forEach(face=>{
        const card = createCard(face)
        grid.appendChild(card)  
    })
}

const StartTimer = ()=>{
    this.loop = setInterval(()=>{
        const currentTimer = Number(timer.innerHTML)
        timer.innerHTML = currentTimer + 1
    }, 1000)
}

window.onload = ()=>{
     const playerName = localStorage.getItem('player')
     spanPlayer.innerHTML= (playerName)
     StartTimer()
    loadGame()
}


