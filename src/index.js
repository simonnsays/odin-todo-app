class Todo {
    constructor(id, title, description, dueDate, priority) {
        this.id = id
        this.title = title
        this.description = description
        this.dueDate = dueDate
        this.priority = priority
    }
}

class Project {
    constructor(name) {
        this.name = name
        this.items = []
    }

    addToDo(id, title, description, dueDate, priority) {
        this.items.push(new Todo(id, title, description, dueDate, priority))
    }

    getList() {
        return this.items
    }
}

const createId = () => {
    return crypto.randomUUID()
}


const newProject = new Project('Reading')
newProject.addToDo(
    createId(), 
    'Grab a book', 
    'Get the fee from the desk, get the latest version',
    '10 / 25',
    true
)

console.log(newProject.getList())