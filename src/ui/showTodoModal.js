import { format } from "date-fns";
import { el, select } from "../scripts/utils.js";
import appManager from "../logic/appManager.js";

const modal = select('.todo-dialog')
const saveBtn = select('#editSave')
const cancelBtn = select('#editCancel') // close button as well
const flag = select('.todo-dialog .flag')
const title = select('.todo-dialog .title p')
const desc = select('.content .description')
const date = select('#date')
const prio = select('#showPrio')
let todoRef

const showModal = (todo) => {
    console.log(flag)
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

    modal.close()
})

export default {
    showModal
}