import Project from "../scripts/Project.js"
import Todo from "../scripts/Todo.js"

// Logic
const projects = []

const addProject = (name) => {
    const newProject = new Project(name)

    projects.push(newProject)
} 

addProject('General')
addProject('Reading')
addProject('Fitness')
addProject('Sleep')

const newTodo = (id) => new Todo (
    'Grab a book', 
    'Get the fee from the desk, get the latest version',
    new Date(2026, 3, 4),
    true, 
    id
)
projects[0].addToDo(newTodo())
projects[0].addToDo(newTodo())
projects[0].addToDo(newTodo())
projects[0].addToDo(newTodo())
projects[0].addToDo(newTodo())

export const getProjects = () => [...projects]