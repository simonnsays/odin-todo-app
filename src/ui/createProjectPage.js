import createTodoEl from "./createTodoEl.js"
import plusIcon from '../asset/plus.svg'
import { el } from "../scripts/utils.js"

const createProjectPage = (project, { showAddTodoDialog, showTodoModal, onChange, onStateToggle }) => {
    const mainContainer = el('div')
    
    const header = el('h1', {text: project.name})

    const tasksContainer = el('div', {class: 'tasks-container   '})

    const todos = project.getList()
    todos.forEach(todo => {
        tasksContainer.appendChild(createTodoEl(todo, { showTodoModal, onChange, onStateToggle }))
    })

    const pageAddTodo = el('button', {class: 'pageAddTask'})
    const icon = el('div', {class: 'icon'})
    const img = el('img', {src: plusIcon})
    icon.appendChild(img)
    const text = el('p', {text: 'Add todo'})
    pageAddTodo.addEventListener('click', () => showAddTodoDialog())

    pageAddTodo.append(icon, text)

    mainContainer.append(header, tasksContainer, pageAddTodo)

    return mainContainer
}

export default createProjectPage