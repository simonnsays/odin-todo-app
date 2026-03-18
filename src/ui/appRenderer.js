import { el, select } from "../scripts/utils.js"
import appManager from "../logic/appManager.js"
import createProjectButton from "./createProjectButton.js"
import createProjectPage from "./createProjectPage.js"
import modal from "./addTodoModal.js"

// const projects = appManager.getProjects()
const page = document.querySelector('.content')
let showingProjectsList = true
let currentPage = {
    type: 'list',
    id: null
}

const startApp = () => {
    showProjectsListPage()
    renderNav()
    modal.init({
        onProjectAdded: renderPage
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
    const countText = el('p', {text: `${projects.length} projects`})
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

    console.log(currentPage)
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
    console.log(currentPage)
}

export default {
    startApp  
} 