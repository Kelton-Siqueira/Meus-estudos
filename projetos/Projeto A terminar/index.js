const elementos = document.querySelectorAll('.numeros')
const display1 = document.querySelector('.display1')
const display2 =  document.querySelector('.display2')

function autitado (elementos){
    const elemento = elementos.target.innerText
    this.displaytec = display1.innerText += elemento
    if(elemento >= 0 || elemento === '.'){
        if(elemento === '.' && displaytec.includes('.')){  
           document.querySelector('.ponto').classList.add('remove')
           document.querySelector('.remove').innerText = ''
        }
        
    }else{
        let elemento1
        let elemento2
        switch(elemento){
          case '+' : 
                elemento1 = display2.innerText = this.displaytec
                display1.innerText = ''
                elemento2 = [...elemento1]
                elemento2.pop()
                const z = elemento2.join('')
                const num = Number(z)
                if(display1.innerText !== ''){
                    const nuaber = this.displaytec
                    const z = Number(nuaber)
                    console.log( z)
                }
         

          break 
        }
    }
    
}

elementos.forEach((elemento)=>{
    elemento.addEventListener('click', (e)=>{
        autitado(e)
    })
})