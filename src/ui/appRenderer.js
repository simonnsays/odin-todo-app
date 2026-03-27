import { el, select } from "../scripts/utils.js"
import appManager from "../logic/appManager.js"
import createProjectButton from "./createProjectButton.js"
import createProjectPage from "./createProjectPage.js"
import addTodoModal from "./addTodoModal.js"
import showTodoModal from "./showTodoModal.js"

// const projects = appManager.getProjects()
const page = document.querySelector('.content')
let showingProjectsList = true
let currentPage = {
    type: 'list',
    id: null
}

const startApp = () => {
    const proj = appManager.testProject('General')
    const todo1 = appManager.addTodo({
        title: 'grab a book',
        description: 'Hello world',
        dueDate: '2026-03-06',
        priority: 'low'   
    }, proj.id)
    const todo2 = appManager.addTodo({
        title: 'sick',
        description: 'Hello new',
        dueDate: '2026-03-09',
        priority: 'high'   
    }, proj.id)
    const todo3 = appManager.addTodo({
        title: 'runnung',
        description: 'ajaw',
        dueDate: '2026-05-09',
        priority: 'med'   
    }, proj.id)

    // console.log(proj)
    // console.log(appManager.getProjects())



    showProjectsListPage()
    renderNav()
    addTodoModal.init({
        onProjectAdded: renderPage
    })
    showTodoModal.init({
        onTodoChange: renderPage
    })

    if (showingProjectsList) showProjectsListPage()
}

const renderPage = (id = null) => {
    renderNav()

    const projects = appManager.getProjects()
    const alteredProject = projects.find(project => project.id === id)

    if(alteredProject?.id === currentPage.id) showProjectPage(projects.findIndex(project => project.id === alteredProject.id))
    if(currentPage.type === 'list') showProjectsListPage()
}

const renderNav = () => {
    // render nav here
    const projects = appManager.getProjects()
    const projectsElNav = document.querySelector('.projects-container-nav .projects')
    projectsElNav.innerHTML = ''

    const navHeader = el('button', {
        class: 'projectHeader',
        text: 'My Projects',
        onClick: () => {
            showingProjectsList = true
            showProjectsListPage()
        }
    })
    projectsElNav.appendChild(navHeader)
    projects.forEach((project, index) => {
        projectsElNav.appendChild(createProjectButton(project, () => showProjectPage(index)))
    })
}

// Content

const createProjectListPage = (projects) => {
    // const projects = appManager.getProjects()
    const container = el('div')
    
    const header = el('h1', {text: 'My Projects'})

    const countContainer = el('div', {class: 'count-container'})
    const countText = el('p', {text: `${projects.length} ${projects.length > 1 ? 'projects' : 'project'}`})
    const hb = el('div', {class: 'hb'})
    countContainer.append(countText, hb)

    const projectsContainer = el('div', {class: 'projects-container-page'})
    projects.forEach((project, index) => {
        projectsContainer.appendChild(
            createProjectButton(project, () => {
                showingProjectsList = false
                showProjectPage(index)
            } 
        ))
    })

    container.append(header, countContainer, projectsContainer)
    return container
}

const showProjectsListPage = () => {
    const projects = appManager.getProjects()
    currentPage = {
        type: 'list',
        id: null
    }
    page.innerHTML = ""
    page.appendChild(createProjectListPage(projects))
}

const showProjectPage = (index) => {
    const projects = appManager.getProjects()
    const currProject = projects[index]
    currentPage = {
        type: 'project',
        id: currProject?.id
    }
    page.innerHTML = ""
    page.appendChild(createProjectPage(currProject))
}

export default {
    startApp  
} 