import { format } from "date-fns"

class Todo {
    constructor(title, description, dueDate, priority, id = null) {
        this.id = id || crypto.randomUUID()
        this.title = title
        this.description = description
        this.dueDate = format(dueDate, "M-dd-yyyy")
        this.priority = priority
        this.isComplete = false
    }

    changePriority(newPriority) {
        this.priority = newPriority
    }

    toggleComplete() {
        this.state = !this.state
    }
}

export default Todo