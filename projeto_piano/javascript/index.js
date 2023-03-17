const keys = document.querySelectorAll('.key')
const checkbox = document.querySelector('.checkbox_keys')
const switcher = document.querySelector('.switcher')
const piano = document.querySelector('.piano_keys')





const playNota = (nota)=>{
    const audio = new Audio(`../notas/notes_${nota}.wav`)
    audio.play()
}

const handleDown = (key)=>{
    playNota(key.getAttribute('data-note'))
    if(key.className.includes('black'))
    {key.classList.add('black--pressed')
        return }
    key.style.background = '#ddd'
    
}


const handleUp = (key)=>{
    if(key.className.includes('black'))
    { key.classList.remove('black--pressed')
        return }
      key.style.background = 'white'  
    
   
}

keys.forEach((key)=>{
    key.addEventListener('mousedown', ()=>handleDown(key))
    key.addEventListener('mouseup', ()=>handleUp(key))
})

checkbox.addEventListener('change', ({target})=>{
    if(target.checked){
        switcher.classList.add('switcher--active')
        piano.classList.remove('disable-keys')
        return
    }
    switcher.classList.remove('switcher--active')
    piano.classList.add('disable-keys')
})

const keyDawn = { 
    "tab":()=>handleDown(keys[0]),
    "1":()=>handleDown(keys[1]),
    "q":()=>handleDown(keys[2]),
    "2":()=>handleDown(keys[3]),
    "a":()=>handleDown(keys[4]),
    "e":()=>handleDown(keys[5]),
    "4":()=>handleDown(keys[6]),
    "r":()=>handleDown(keys[7]),
    "s":()=>handleDown(keys[8]),
    "t":()=>handleDown(keys[9]),
    "y":()=>handleDown(keys[10])

}

const keyUp = {
    "tab":()=>handleUp(keys[0]),
    "1":()=>handleUp(keys[1]),
    "q":()=>handleUp(keys[2]),
    "2":()=>handleUp(keys[3]),
    "a":()=>handleUp(keys[4]),
    "e":()=>handleUp(keys[5]),
    "4":()=>handleUp(keys[6]),
    "r":()=>handleUp(keys[7]),
    "s":()=>handleUp(keys[8]),
    "t":()=>handleUp(keys[9]),
    "y":()=>handleUp(keys[10])
}

document.addEventListener('keydown',(event)=>{
    event.preventDefault()
keyDawn[event.key]()
})

document.addEventListener('keyup',(event)=>{
    event.preventDefault()
keyUp[event.key]()
})