import { el, select } from "../scripts/utils.js"
import appManager from "../logic/appManager.js"

// MODAL
const addTaskBtn = select('#addTask')
const dialog = select('dialog')
const addBtn = select('#addToDo')
const cancelBtn = select('#cancel')
const newProjectElements = {
    select: select('#destination'),
    addBtn: select('#addProject'),
    inputContainer: select('.input-container'),
    input: select('#newProjectInput'),
    confirmBtn: select('#projectConfirm')
}
let onProjectAdded

const init = (callback) => {
    onProjectAdded = callback.onProjectAdded
}

const showAddTodoDialog = () => {
    dialog.showModal()
    
    refillProjectOptions(appManager.getProjects())
}

addTaskBtn.addEventListener('click', () => {
    // Add Task from dialog to logic
    
    dialog.close()
})

function refillProjectOptions(projects) {
    if(projects.length === 0) {
        newProjectElements.select.innerHTML = `<option disabled selected>New Project</option>`
        return
    }

    newProjectElements.select.innerHTML = ''

    projects.forEach(project => {
        const option = el('option', {text: project.name})
        newProjectElements.select.appendChild(option)
    })
}

addBtn.addEventListener('click', showAddTodoDialog)

cancelBtn.addEventListener('click', () => {
    dialog.close()
})

newProjectElements.addBtn.addEventListener('click', () => {
    // Show input for project to be added
    newProjectElements.inputContainer.classList.remove('hidden')
    newProjectElements.input.focus()
})

newProjectElements.confirmBtn.addEventListener('click', () => {
    // add new project to the project list 
    if(newProjectElements.input.value === '') return

    appManager.addProject(newProjectElements.input.value)
    refillProjectOptions(appManager.getProjects())

    newProjectElements.inputContainer.classList.add('hidden')

    // SIGNAL UI TO UPDATE PROJECT LISTS
    if(onProjectAdded) onProjectAdded()
}) 

export default {
    init,
    showAddTodoDialog
}