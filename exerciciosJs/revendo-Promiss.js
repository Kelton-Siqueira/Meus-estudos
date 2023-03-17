// criação de promiss


const promessa = new Promise((resolve, reject)=>{
    const nome = 'keton'

    if(nome === 'kelton')resolve('usuario encontrado')
    else reject('usuario não encontrado')
})


promessa
    .then((data)=>{
        console.log(data)
    })
    .catch(e=> console.log())