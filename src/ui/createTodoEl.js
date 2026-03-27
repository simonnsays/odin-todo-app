import delIcon from "../asset/delete-outline.svg"
import appManager from "../logic/appManager.js"
import Project from "../scripts/Project.js"
import { el } from "../scripts/utils.js"

const createTodoEl = (todo, { showTodoModal, onChange, onStateToggle }) => {
    const container = el('div', {class: `${todo.isComplete ? 'todo-completed' : ''}`}) 

    const todoBtn = el('button', {class: 'task-button'})

    const flag = el('div', {class: `flag ${todo.isComplete ? 'flag-completed' : ''}`})

    flag.addEventListener('click', () => {
        onChange(todo.id)
        onStateToggle(todo.id)   
    })

    const task = el('div', {class: 'task'})
    const title = el('p', {class: 'title', text: todo.title}) 
    const desc = el('p', {class: 'desc', text: todo.description})
    const due = el('p', {class: 'due', text: todo.interpretDate()})
    task.append(title, desc, due)

    const delBtn = el('button', {class: 'del-button'})
    const icon = el('img', {src: delIcon})
    delBtn.appendChild(icon)
    delBtn.addEventListener('click', () => {
        const proejectRef = appManager.findProject(todo.id)
        appManager.deleteTodo(todo.id)
        onChange(proejectRef.id )
    })

    todoBtn.append(flag, task, delBtn)

    todoBtn.addEventListener('click', (e) => {
        if (e.target.closest('.flag') || e.target.closest('.del-button')) return     
        showTodoModal(todo)
    })
    
    const hbreak = el('div', {class: 'hb'})

    container.append(todoBtn, hbreak)

    return container
}

export default createTodoEl