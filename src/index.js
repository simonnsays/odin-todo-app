import "./style.css"
import poundIcon from './asset/pound.svg'
import Project from "./scripts/Project.js"
import Todo from "./scripts/Todo.js"

const projectsEl = document.querySelector('.projects')

const projects = []

const genProject = new Project('General')
const newProject = new Project('Reading')
const newTodo = (id) => new Todo (
    'Grab a book', 
    'Get the fee from the desk, get the latest version',
    new Date(2026, 13, 4),
    true, 
    id
)
newProject.addToDo(newTodo())
projects.push(genProject)
projects.push(newProject)

function createProjectNavEl(project) {
    const button = document.createElement('button')
    button.className = 'project'

    const icon = document.createElement('div')
    icon.className = 'icon'
    const img = document.createElement('img')
    img.src = poundIcon
    icon.appendChild(img)

    const name = document.createElement('p')
    name.textContent = project.name

    button.appendChild(icon)
    button.appendChild(name)
 
    return button
}

projects.forEach(project => {
    console.log(project)
    console.log(createProjectNavEl(project))
    projectsEl.appendChild(createProjectNavEl(project))
})





// MODAL
const dialog = document.querySelector('dialog')
const addBtn = document.querySelector('#addToDo')
const cancelBtn = document.querySelector('#cancel')
const newProjectElements = {
    select: document.querySelector('#destination'),
    addBtn: document.querySelector('#addProject'),
    inputContainer: document.querySelector('.input-container'),
    input: document.querySelector('#newProjectInput'),
    confirmBtn: document.querySelector('#projectConfirm')
}

addBtn.addEventListener('click', () => {
    dialog.showModal()
})
dialog.showModal()

cancelBtn.addEventListener('click', () => {
    dialog.close()
})

newProjectElements.addBtn.addEventListener('click', () => {
    console.log('Added project')
    newProjectElements.inputContainer.classList.remove('hidden')
    newProjectElements.input.focus()
})

newProjectElements.confirmBtn.addEventListener('click', () => {
    if(newProjectElements.input.value === '') return
    console.log(newProjectElements.select)
    const selectEl = newProjectElements.select

    const newOption = document.createElement('option')
    newOption.textContent = newProjectElements.input.value
    newOption.selected = true
    
    selectEl.appendChild(newOption) 
}) 