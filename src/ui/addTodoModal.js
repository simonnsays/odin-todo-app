import { el, select } from "../scripts/utils.js"
import appManager from "../logic/appManager.js"

// MODAL
let onProjectAdded
const navAddBtn = select('#addToDo')
const dialog = select('dialog')
const cancelBtn = select('#cancel')
const addTaskBtn = select('#addTask')
const newProjEls = {
    selectEl: select('#destination'),
    addBtn: select('#addProject'),
    inputContainer: select('.input-container'),
    input: select('#newProjectInput'),
    confirmBtn: select('#projectConfirm')
}

const init = (callback) => {
    onProjectAdded = callback.onProjectAdded

}

const showAddTodoDialog = () => {
    dialog.showModal()
    
    refillProjectOptions(appManager.getProjects())
}

const form  = select('form')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const data = new FormData(form)
    const projectId = select('#destination').value

    appManager.addTodo(data, projectId)
   
    if(onProjectAdded) onProjectAdded(projectId)


    form.reset()
    dialog.close()
})

function refillProjectOptions(projects) {
    if(projects.length === 0) {
        newProjEls.selectEl.innerHTML = `<option value="" disabled selected>Select Project</option>`
        return
    }

    newProjEls.selectEl.innerHTML = ''

    projects.forEach(project => {
        const option = el('option', {
            text: project.name,
            value: project.id
        })
        newProjEls.selectEl.appendChild(option)
    })
}

navAddBtn.addEventListener('click', showAddTodoDialog)

cancelBtn.addEventListener('click', () => {
    dialog.close()
})

newProjEls.addBtn.addEventListener('click', () => {
    // Show input for project to be added
    newProjEls.inputContainer.classList.remove('hidden')
    newProjEls.input.focus()
})

newProjEls.confirmBtn.addEventListener('click', () => {
    // add new project to the project list 
    if(newProjEls.input.value === '') {
        newProjEls.inputContainer.classList.add('hidden')
        return
    } 

    appManager.addProject(newProjEls.input.value)
    refillProjectOptions(appManager.getProjects())

    newProjEls.input.value = ''
    newProjEls.inputContainer.classList.add('hidden')

    // SIGNAL UI TO UPDATE PROJECT LISTS
    if(onProjectAdded) onProjectAdded()
}) 

export default {
    init,
    showAddTodoDialog
}