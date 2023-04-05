const input = document.querySelectorAll('.num')


input.forEach(e=>{
    e.addEventListener('click', ()=>{
        calculadora.text1.value = e.target.inneText
    })
})