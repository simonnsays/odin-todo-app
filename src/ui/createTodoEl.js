import el from "../scripts/utils.js"

const createTodoEl = (todo) => {
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

export default createTodoEl