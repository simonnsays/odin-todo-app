import Project from "../scripts/Project.js"
import Todo from "../scripts/Todo.js"

// Logic
let projects = []

const addProject = (name) => {
    const newProject = new Project(name)
    projects.push(newProject)
    save()
} 

const deleteProject = (id) => {
    projects = projects.filter(project => project.id !== id)

    save()
}

const addTodo = (data, projectId) => {
    const projIndex = projects.findIndex(project => project.id === projectId)
    projects[projIndex].todos.push(
        new Todo (
            data.title,
            data.description,
            data.dueDate,
            data.priority
        ))   
    save()     
}

const editTodo = (id, newData) => {
    const foundTodo = findTodo(id)

    for(let key in newData) {
        foundTodo[key] = newData[key]
    }

    save()
} 

const deleteTodo = (id) => {
    const project = findProject(id)
    project.todos = project.todos.filter(todo => todo.id !== id)

    save()
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

    save()
}

const getProjects = () => [...projects]

const save = () => {
    localStorage.setItem('projects', JSON.stringify(projects))
}

const load = () => {
    const storedProjects = JSON.parse(localStorage.getItem("projects")) || [];

    projects = storedProjects.map(pData => {
        const project = new Project(pData.name, pData.id);
        
        // Recreate the nested Todo instances
        project.todos = pData.todos.map(tData => 
            new Todo(
                tData.title,
                tData.description,
                tData.dueDate,
                tData.priority,
                tData.id
            )
        );

        return project;
    });

}

// test
const testProject = (name) => {
    const newProject = new Project(name)
    projects.push(newProject)
    return newProject
}

export default {
    addProject,
    deleteProject,
    findProject,
    addTodo,
    editTodo,
    deleteTodo,
    toggleTodoState,
    getProjects,
    testProject,
    load
} 