import "./style.css"
import Project from "./scripts/Project.js"
import Todo from "./scripts/Todo.js"

const dialog = document.querySelector('dialog')
const addBtn = document.querySelector('#addToDo')

const newProject = new Project('Reading')
const newTodo = (id) => new Todo (
    'Grab a book', 
    'Get the fee from the desk, get the latest version',
    new Date(2026, 13, 4),
    true, 
    id
)
newProject.addToDo(newTodo())
newProject.addToDo(newTodo(2))
newProject.removeToDo(2)
console.log(newProject.getList())


addBtn.addEventListener('click', () => {
    dialog.showModal()
})

