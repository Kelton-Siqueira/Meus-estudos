const valideteBody = (req, res, next)=>{
    const { body } = req

    if(body.title === undefined){
       return res.status(400).json({mensagem: 'the field "title" is required'})
    }
    if(body.title === ''){
      return  res.status(400).json({mesagem: 'Elemento inexistente'})
      
    }
    next()
}

const valideteStatus = (req, res, next)=>{
    const { body } = req

    if(body.status === undefined){
       return res.status(400).json({mensagem: 'the field "title" is required'})
    }
    if(body.status === ''){
      return  res.status(400).json({mesagem: 'Elemento inexistente'})
      
    }
    next()
}

module.exports = {
    valideteBody,
    valideteStatus
}