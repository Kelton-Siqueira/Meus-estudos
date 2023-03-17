const previos = document.querySelector('.previous-operetion')
const current = document.querySelector('.current-operetion')
const buttons = document.querySelectorAll('.buttons-container button')
console.log(buttons)

class calcular {
    constructor(previos, current){
        this.previos = previos
        this.current = current
        this.currentOperation = ''
    }
    addDigit(digit){
        // checar se ja tem algum ponto
        if(digit === '.' && this.current.innerText.includes('.')){
            return
        }
        this.currentOperation = digit
        this.updatScreen()
    }
    // Processar as operações
    processOperetion(operetion){
        //mudar operação
        if(this.current.innerText ==='' && operetion !== 'C'){

            if(this.previos.innerText !==''){
                //mudança de operaçãp
                this.changeOperetioon(operetion)
            }
            return
        }


        //get
        
        let opetaion 
        const previosTex = +this.previos.innerText.split(' ')[0]
        const currentTex = +this.current.innerText
    
        switch(operetion){
            case '+':
                opetaion = previosTex + currentTex
               this.updatScreen(opetaion, operetion, currentTex, previosTex)
                break
                case '-':
                opetaion = previosTex - currentTex
               this.updatScreen(opetaion, operetion, currentTex, previosTex)
                break
                case '*':
                opetaion = previosTex * currentTex
               this.updatScreen(opetaion, operetion, currentTex, previosTex)
                break
                case '/':
                opetaion = previosTex / currentTex
               this.updatScreen(opetaion, operetion, currentTex, previosTex)
                break
                case 'DEL':
                this.processDEL()
                break
                case 'CE':
                this.processClear()
                break
                case 'C':
                this.processClearAll()
                break
                case '=':
                this.processIgual()
                break
            default:
                return
        }
    }


    updatScreen(operetionValue = null, operetion = null, current= null, previos = null ){
        console.log(operetionValue, operetion, current, previos)
        if(operetionValue === null){
            this.current.innerText += this.currentOperation/* oque for digitado será passado para essa tag */
        } else{
            if(previos === 0){
                operetionValue = current
            }
            this.previos.innerText = `${operetionValue} ${operetion}`
            this.current.innerText=''
        }
        

    }
    changeOperetioon(operetion){
        const math = ['*', '/', '-', '+']
        if(!math.includes(operetion)){
            return
        }
        //novo operador
        this.previos.innerText = this.previos.innerText.slice(0, -1) + operetion
    }

    //deletar
    processDEL(){
        this.current.innerText = this.current.innerText.slice(0, -1)
    }
    //Clear
    processClear(){
        this.current.innerText = ''
    }
    //Clearall
    processClearAll(){
        this.current.innerText = ''
        this.previos.innerText = ''
    }
    //Igual
    processIgual(){
        const operetion = previos.innerText.split(' ')[1]
        this.processOperetion(operetion)
    }
}

const cal = new calcular(previos, current)

buttons.forEach((button)=>{
    button.addEventListener('click', (e)=>{
        const valor = e.target.innerText/* forma de pegar os elementos do butão ou seja, o texto dentro dele */
        if(+valor >= 0 || valor === '.'){/* aqui ouve um tratamento para separa numeros de operações */
        cal.addDigit(valor)

        }else{/* aqui retornará as operações */
        cal.processOperetion(valor)
        }
    })
})