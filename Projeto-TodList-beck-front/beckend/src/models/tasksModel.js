const connection = require('./connection')

const getAll = async ()=>{
    const [tasks] = await /* fez um destructor para pegar o priemeiro elemento do array que foi retornado */connection.execute('SELECT * FROM tasks')
    return tasks
}/* Essa função irá se comunicar diretamente com o banco de dados */


const creaTasks = async(task)=>{
    const { title } = task

    const datUtc = new Date(Date.now()).toUTCString()

    
    const query = 'INSERT INTO tasks(title, status, created_at) VALUES (?, ?, ?)'
    const [createdTask] = await connection.execute(query, [title, 'pendente', datUtc])
    return{insertId: createdTask.insertId}

}

const deleteTask = async(id) =>{
    const [remove] = await connection.execute('DELETE FROM tasks WHERE id = ? ', [id])
    return remove
}

const updateTask = async (id, task)=>{
    const query = 'UPDATE tasks SET title = ?, status = ? WHERE id = ?'
    const {title, status} = task
    const update = await connection.execute(query, [title, status, id])
    return update
}

module.exports = {
    getAll,
    creaTasks,
    deleteTask,
    updateTask
}