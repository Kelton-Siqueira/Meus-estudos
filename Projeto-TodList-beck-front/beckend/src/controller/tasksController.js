const tasksModel = require('../models/tasksModel')

const getAll = async (_req, res)=>{
    const taks = await tasksModel.getAll()
     return res.status(200).json(taks)
}

const creaTasks = async (req, res) =>{
    const creaTasks = await tasksModel.creaTasks(req.body) 
    return res.status(201).json(creaTasks)
}
const deleteTask = async (req, res)=>{
    const {id} = req.params

    await tasksModel.deleteTask(id)
    return res.status(200).json()
}

const updateTask = async (req, res) =>{
    const {id} = req.params
    
    await tasksModel.updateTask(id, req.body)
    return res.status(204).json() 
}
module.exports = {
    getAll,
    creaTasks,
    deleteTask,
    updateTask
}