import Project from "../scripts/Project.js"
import Todo from "../scripts/Todo.js"

// Logic
const projects = []

const addProject = (name) => {
    const newProject = new Project(name)
    projects.push(newProject)
} 

const addTodo = (data, projectId) => {
    const projIndex = projects.findIndex(project => project.id = projectId)
    projects[projIndex].todos.push(
        new Todo (
            data.title,
            data.description,
            data.dueDate,
            data.priority
        ))        
}

const editTodo = (id, newData) => {
    const foundTodo = findTodo(id)

    for(let key in newData) {
        foundTodo[key] = newData[key]
    }

} 

const findTodo = (id) => {
    return findProject(id)
    .todos.find(todo => todo.id === id)
}

const findProject = (todoId) => {
    return projects
    .find(project => project.todos.find(todo => todo.id === todoId))
}

const toggleTodoState = (id) => {
    const foundTodo = findTodo(id)

    foundTodo.isComplete = !foundTodo.isComplete
}

const getProjects = () => [...projects]

// test
const testProject = (name) => {
    const newProject = new Project(name)
    projects.push(newProject)
    return newProject
}

export default {
    addProject,
    findProject,
    addTodo,
    editTodo,
    toggleTodoState,
    getProjects,
    testProject
} 