import { el, select } from "../scripts/utils.js"
import appManager from "../logic/appManager.js"
import createProjectButton from "./createProjectButton.js"
import createProjectPage from "./createProjectPage.js"
import modal from "./addTodoModal.js"

// const projects = appManager.getProjects()
const page = document.querySelector('.content')
let showingProjectsList = true
let currentPage = {

}
const startApp = () => {
    showProjectsListPage()
    renderNav()
    modal.init({
        onProjectAdded: renderNav
    })

    if (showingProjectsList) showProjectsListPage()

    select()
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
    page.innerHTML = ""
    page.appendChild(createProjectListPage(projects))
}

const showProjectPage = (index) => {
    const projects = appManager.getProjects()
    page.innerHTML = ""
    page.appendChild(createProjectPage(projects[index]))
}

export default {
    startApp  
} 