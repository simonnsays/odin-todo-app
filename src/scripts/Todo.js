import { format, parseISO } from "date-fns"

class Todo {
    constructor(title, description, dueDate, priority, id = null) {
        this.id = id || crypto.randomUUID()
        this.title = title
        this.description = description
        this.dueDate = format(parseISO(dueDate), "M-dd-yyyy")
        this.priority = priority
        this.isComplete = false
    }

    changePriority(newPriority) {
        this.priority = newPriority
    }

    toggleComplete() {
        this.isComplete = !this.isComplete
    }

    interpretDate() {
        return format(this.dueDate, "d MMM")
    }
}

export default Todo