import "./style.css"
import poundIcon from './asset/pound.svg'
import Project from "./scripts/Project.js"
import Todo from "./scripts/Todo.js"

// Logic
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


// Nav
const projectsElNav = document.querySelector('.projects-container-nav .projects')
const createProjectNavEl = (project) => {
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
    projectsElNav.appendChild(createProjectNavEl(project))
})

// Content
const page = document.querySelector('.content')
const createMyProjectsPage = (projects, parentEl) => {
    const header = document.createElement('h1')
    header.textContent = 'My Projects'

    const countContainer = document.createElement('div')
    countContainer.className = 'count-container'
    const countText = document.createElement('p')
    countText.textContent = `${projects.length} projects`
    countContainer.appendChild(countText)
    const hb = document.createElement('div')
    hb.className = 'hb'
    countContainer.appendChild(hb)

    const projectsContainer = document.createElement('div')
    projectsContainer.className = 'projects-container-page'
    projects.forEach(project => {
        projectsContainer.appendChild(createProjectEl(project))
    })

    parentEl.appendChild(header)
    parentEl.appendChild(countContainer)
    parentEl.appendChild(projectsContainer)
}

const createProjectEl = (project) => {
    const button = document.createElement('button')
    button.className = 'project'

    const icon = document.createElement('div')
    icon.className = 'icon'
    const img = document.createElement('img')
    img.src = poundIcon
    icon.appendChild(img)

    const text = document.createElement('p')
    text.textContent = project.name

    button.appendChild(icon)
    button.appendChild(text)

    return button
}

createMyProjectsPage(projects, page)


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
// dialog.showModal()

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