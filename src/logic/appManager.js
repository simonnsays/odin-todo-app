import Project from "../scripts/Project.js"
import Todo from "../scripts/Todo.js"

// Logic
const projects = []

const addProject = (name) => {
    const newProject = new Project(name)

    projects.push(newProject)
} 

const newTodo = (id) => new Todo (
    'Grab a book', 
    'Get the fee from the desk, get the latest version',
    new Date(2026, 3, 4),
    true, 
    id
)

// addProject('General')
// addProject('Reading')
// addProject('Fitness')
// addProject('Sleep')

// projects[0].addToDo(newTodo())
// projects[0].addToDo(newTodo())
// projects[0].addToDo(newTodo())

const getProjects = () => [...projects]

export default {
    addProject,
    newTodo,
    getProjects
} 