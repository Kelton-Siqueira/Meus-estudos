const express = require('express')
const taksController = require('./controller/tasksController')
const middelwer = require('./middlewares/tasksMiddleware')
  
const router = express.Router()/* Router é um gerenciador/manipulador de rotas do node, onde serve para criar rotas de forma modularizada, assim podendo criar um arquivo separado de manipulação de rotas */

router.get('/tasks',taksController.getAll)
router.post('/tasks', middelwer.valideteBody,  taksController.creaTasks)/* iremos criar um middelwer, onde primeiro irá chamar a primeira função que é a validadação, para depois retorna a função principal */
router.delete('/tasks/:id', taksController.deleteTask)/* Todo elemento colocado depois dos dois pontontos serão considerados params, por isso é possivel acessalos. */
router.put('/tasks/:id',middelwer.valideteBody, middelwer.valideteStatus ,taksController.updateTask)

module.exports = router 