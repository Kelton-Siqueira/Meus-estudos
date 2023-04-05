const input = document.querySelector('.login_input')
const button = document.querySelector('.login_button')
const form = document.querySelector('.login-form')

const validedeinput = ({target})=>{
    //Fizemos uma validação onde é possivel remover ou adicionar o disabled ao button
    if(target.value.length > 2){
        button.removeAttribute('disabled')
        return
    }
        button.setAttribute('disabled', '') 
}

const handlesubmit = (e)=>{
     e.preventDefault()
     localStorage.setItem('player', input.value)
     window.location = 'pages/game.html'
}

input.addEventListener('input', validedeinput)
form.addEventListener('submit', handlesubmit)