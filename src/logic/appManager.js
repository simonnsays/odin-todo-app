import Project from "../scripts/Project.js"
import Todo from "../scripts/Todo.js"

// Logic
const projects = []

const addProject = (name) => {
    const newProject = new Project(name)
    
    console.log(newProject)
    projects.push(newProject)
} 

const newTodo = (id) => new Todo (
    'Grab a book', 
    'Get the fee from the desk, get the latest version',
    '2026-03-14',
    true, 
    id
)

const addTodo = (data, projectId) => {
    const projIndex = projects.findIndex(project => project.id = projectId)
    projects[projIndex].todos.push(
        new Todo (
        data.get('todo_title'),
        data.get('todo_description'),
        data.get('todo_dueDate'),
        data.get('todo_priority'),
    ))     
}

projects[0].addToDo(newTodo())
// projects[0].addToDo(newTodo())
// projects[0].addToDo(newTodo())

const getProjects = () => [...projects]

export default {
    addProject,
    newTodo,
    addTodo,
    getProjects
} 