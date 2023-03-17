const tbody = document.querySelector('tbody')
const addForm = document.querySelector('.add-form')
const inpute = document.querySelector('.input-task')
const fatchTasks = async () =>{
    const response = await fetch('http://localhost:3333/tasks')
    const tasks = await response.json()
    return tasks
}

const addTask = async (evento)=>{
    evento.preventDefault()

    const task = {title: inpute.value}
    
    await fetch('http://localhost:3333/tasks', {
        method: 'post',
        headers:{ 'Content-Type': 'application/json'},
        body: JSON.stringify(task) 
    })
    inpute.value = ''
    loadTasks()
}

const deleteTask = async (id)=>{

    await fetch(`http://localhost:3333/tasks/${id}`,{
        method: 'delete'
    })
    loadTasks()
}

const updateTask = async ({id, title, created_at, status})=>{
    await fetch(`http://localhost:3333/tasks/${id}`, {
        method: 'put',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ title, status})
    })
    loadTasks()
}

const CreateElement = (tag, innerText = '', innerHTML = '') =>{
    const element = document.createElement(tag)
    if(innerText){
        element.innerText = innerText
    }
    if(innerHTML){
        element.innerHTML = innerHTML
    }
    

    return element
}

const createdSelect = (value)=>{
    const options = `<option value=""></option>
    <option value="pendente">pendente</option>
    <option value="em-andamento">em andamento</option>
    <option value="concluída">concluída</option>`
    const select = CreateElement('select', '', options)

    select.value = value

    return select
}

const  creatRow = (task) =>{

    const {id, title, created_at, status} = task

    const tr = CreateElement('tr')
    const tdTitle = CreateElement('td', title)
    const tdCreatAt = CreateElement('td', formatDate(created_at))
    
    const tdStatus = CreateElement('td')
    const tdActions = CreateElement('td')
     
    const select = createdSelect(status)
    tdStatus.appendChild(select)
    const editButton = CreateElement('button','', '<span class="material-symbols-outlined">edit</span>')
    const deleteButton = CreateElement('button', '', '<span class="material-symbols-outlined">delete</span>')
    editButton.classList.add('btn-action')
    deleteButton.classList.add('btn-action')

    const edtiForm = CreateElement('form')
    const edtinput = CreateElement('input')

    edtinput.value = title
    
    edtiForm.addEventListener('submit', (event)=>{
        event.preventDefault()
        updateTask({id, title:edtinput.value, status})
    })

    edtiForm.appendChild(edtinput)

    editButton.addEventListener('click', ()=>{
        tdTitle.innerText = ''
        tdTitle.appendChild(edtiForm)
    })

    tdActions.appendChild(editButton)
    tdActions.appendChild(deleteButton)

    deleteButton.addEventListener('click', ()=>{
        deleteTask(id)})
    select.addEventListener('change', ({target})=> updateTask({...task, status:target.value}))
    
    tr.appendChild(tdTitle)
    tr.appendChild(tdCreatAt)
    tr.appendChild(tdStatus)
    tr.appendChild(tdActions)

    return tr
} 

const loadTasks = async ()=>{
    const tasks = await fatchTasks()

    tbody.innerHTML = ''

    tasks.forEach((task) =>{
        const tr = creatRow(task)

        tbody.appendChild(tr)
    })
}

const formatDate = (dateUTC)=>{
    const option = {dateStyle: 'long', timeStyle:'short'}
    const date = new Date(dateUTC).toLocaleString('pt-br',option)
    return date
}


addForm.addEventListener('submit', addTask)

loadTasks()

