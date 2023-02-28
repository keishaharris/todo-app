class Task {
    constructor (title, description, priority, notes, date, id) {
        this.title = title, 
        this.description = description, 
        this.priority = priority,
        this.notes= notes,
        this.date = date,
        this.id = taskStorage.length + 1;
    }

}

function createTask(){
    let myTask = new Task(title, description, priority, notes, date, id);
    console.log(myTask);
    return myTask
}
export default Task;