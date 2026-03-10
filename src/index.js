import "./style.css"
import poundIcon from './asset/pound.svg'
import plusIcon from './asset/plus.svg'
import Project from "./scripts/Project.js"
import Todo from "./scripts/Todo.js"

// Logic
const projects = []

const addProject = (name) => {
    const newProject = new Project(name)

    projects.push(newProject)
} 

addProject('General')
addProject('Reading')
addProject('Fitness')

const newTodo = (id) => new Todo (
    'Grab a book', 
    'Get the fee from the desk, get the latest version',
    new Date(2026, 13, 4),
    true, 
    id
)
projects[0].addToDo(newTodo())
projects[0].addToDo(newTodo())
projects[0].addToDo(newTodo())
projects[0].addToDo(newTodo())
projects[0].addToDo(newTodo())

// UTIL
const el = (type, options = {}) => {
    const element = document.createElement(type)
    
    if(options.class) element.className = options.class
    if(options.text) element.textContent = options.text
    if(options.src) element.src = options.src
    if(options.onClick) element.addEventListener('click', options.onClick)

    return element
}

// Nav
const projectsElNav = document.querySelector('.projects-container-nav .projects')
const createProjectNavEl = (project) => {
    const button = el('button', {class: 'project'})

    const icon = el('div', {class: 'icon'})
    const img = el('img', {src: poundIcon})
    icon.appendChild(img)

    const name = el('p', {text: project.name})

    button.append(icon, name)
 
    return button
}

projects.forEach(project => {
    projectsElNav.appendChild(createProjectNavEl(project))
})

// Content
const page = document.querySelector('.content')
const createProjectListPage = (projects) => {
    const container = el('div')
    
    const header = el('h1', {text: 'My Projects'})

    const countContainer = el('div', {class: 'count-container'})
    const countText = el('p', {text: `${projects.length} projects`})
    const hb = el('div', {class: 'hb'})
    countContainer.append(countText, hb)

    const projectsContainer = el('div', {class: 'projects-container-page'})
    projects.forEach(project => {
        projectsContainer.appendChild(createProjectButton(project))
    })

    container.append(header, countContainer, projectsContainer)
    return container
}

const createProjectButton = (project) => {
    const button = el('button', {class: 'project'})

    const icon = el('div', {class: 'icon'})
    const img = el('img', {src: poundIcon})
    icon.appendChild(img)

    const text = el('p', {text: project.name})

    button.append(icon, text)

    return button
}

const createProjectPage = (project) => {
    const mainContainer = el('div')
    
    const header = el('h1', {text: project.name})

    const tasksContainer = el('div', {class: 'tasks-container'})

    const todos = project.getList()
    todos.forEach(todo => {
        tasksContainer.appendChild(createTodoEl(todo))
    })

    const pageAddTodo = el('button', {class: 'pageAddTask'})
    
    const icon = el('div', {class: 'icon'})
    const img = el('img', {src: plusIcon})
    icon.appendChild(img)

    const text = el('p', {text: 'Add todo'})

    pageAddTodo.append(icon, text)

    mainContainer.append(header, tasksContainer, pageAddTodo)

    return mainContainer
}

const createTodoEl = (todo) => {
    console.log(todo)
    console.log(todo.title)
    const container = el('div')

    const todoBtn = el('button', {class: 'task-button'})

    const flag = el('div', {class: 'flag'})

    const task = el('div', {class: 'task'})
    const title = el('p', {class: 'title', text: todo.title}) 
    const desc = el('p', {class: 'desc', text: todo.description})
    const due = el('p', {class: 'due', text: todo.interpretDate()})
    task.append(title, desc, due)

    todoBtn.append(flag, task)
    
    const hbreak = el('div', {class: 'hb'})

    container.append(todoBtn, hbreak)

    return container
}


// page.appendChild(createProjectListPage(projects))
page.appendChild(createProjectPage(projects[0]))


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

    const newOption = el('option')
    newOption.textContent = newProjectElements.input.value
    newOption.selected = true
    
    selectEl.appendChild(newOption) 
}) 

