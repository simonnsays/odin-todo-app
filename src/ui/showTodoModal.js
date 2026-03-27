import { format } from "date-fns";
import { select } from "../scripts/utils.js";
import appManager from "../logic/appManager.js";

const modal = select('.todo-dialog')
const saveBtn = select('#editSave')
const cancelBtn = select('#editCancel') // close button as well
const flag = select('.todo-dialog .flag')
const title = select('.todo-dialog .title p')
const desc = select('.todo-dialog .description')
const date = select('#date')
const prio = select('#showPrio')
let todoRef
let onTodoChange

const init = (callback) => {
    onTodoChange = callback.onTodoChange
}

const showModal = (todo) => {
    todoRef = todo
    modal.showModal()
    title.textContent = todo.title
    desc.textContent = todo.description
    date.value = format(todo.dueDate, 'yyyy-MM-dd')
    prio.value = todo.priority
}

cancelBtn.addEventListener('click', () => {
    modal.close()
})

saveBtn.addEventListener('click', () => {
    const newData = {
        title: title.textContent,
        description: desc.textContent,
        dueDate: date.value,
        priority: prio.value
    }

    appManager.editTodo(todoRef.id, newData)

    onTodoChange(appManager.findProject(todoRef.id).id)

    modal.close()
})

flag.addEventListener('click', () => {
    appManager.toggleTodoState(todoRef.id)
    onTodoChange(appManager.findProject(todoRef.id).id)
})

export default {
    init,
    showModal
}