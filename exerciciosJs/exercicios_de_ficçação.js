const n = (val)=> val ? console.log('truthy'):console.log('falsy')

n(true)
n(false)

console.log(null==undefined)
console.log(null===undefined)

const number = Number('keltin')
console.log('type'==NaN)

const numbs = 1


switch(numbs){
    case 1:
        console.log('janeiro')
        break
    case 2:
        console.log('fevereiro')
        break
    case 3:
        console.log('março')
        break
    default:
        console.log('nenhuma das alternativas')
        break
}

let v = 10

do{
    console.log(v)
    v++
} while(v < 20){
    console.log('terminou')
}