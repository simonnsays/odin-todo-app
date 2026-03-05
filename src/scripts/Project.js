class Project {
    constructor(name) {
        this.name = name
        this.todos = []
    }

    addToDo(todo) {
        this.todos.push(todo)
    }

    removeToDo(id) {
        this.todos = this.todos.filter(todo => todo.id !== id)
    }

    getList() {
        return [...this.todos]
    }
}

export default Project