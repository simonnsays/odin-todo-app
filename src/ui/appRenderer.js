import el from "../scripts/utils.js"
import { getProjects } from "../logic/appManager.js"
import createProjectButton from "./createProjectButton.js"
import createProjectPage from "./createProjectPage.js"

const projects = getProjects()
console.log(projects)
const page = document.querySelector('.content')


// Nav
const projectsElNav = document.querySelector('.projects-container-nav .projects')
const navHeader = el('button', {
    class: 'projectHeader',
    text: 'My Projects',
    onClick: () => showProjectsList
})
projectsElNav.appendChild(navHeader)
projects.forEach((project, index) => {
    projectsElNav.appendChild(createProjectButton(project, () => showProjectPage(index)))
})

// Content

const createProjectListPage = (projects) => {
// function createProjectListPage(projects) {
    const container = el('div')
    
    const header = el('h1', {text: 'My Projects'})

    const countContainer = el('div', {class: 'count-container'})
    const countText = el('p', {text: `${projects.length} projects`})
    const hb = el('div', {class: 'hb'})
    countContainer.append(countText, hb)

    const projectsContainer = el('div', {class: 'projects-container-page'})
    projects.forEach((project, index) => {
        projectsContainer.appendChild(
            createProjectButton(project, () => showProjectPage(index))
        )
    })

    container.append(header, countContainer, projectsContainer)
    return container
}

function showProjectsList() {
    console.log('hit')
    page.innerHTML = ""
    page.appendChild(createProjectListPage(projects))
}

function showProjectPage(index) {
    page.innerHTML = ""
    page.appendChild(createProjectPage(projects[index]))
}

showProjectsList()

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


export const startUI = () => {
    showProjectsList()
}