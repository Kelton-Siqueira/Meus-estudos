const numeros = document.querySelectorAll('.numeros')
const leitor = document.querySelector('input')
const equaçoes = document.querySelectorAll('.equacao')



numeros.forEach(((numero)=>{
    numero.addEventListener('click', ()=> leitor.value = numero.id)
}))
const butons = numeros.forEach((btn)=>{
    btn.addEventListener('click', (e)=>{
        const value1 = e.target.innerText
    if(+value1 >= 0 || value1 ==='.'){
        console.log(value1)
    }else{
        console.log(value1, 'test')
    }
        
    })
})