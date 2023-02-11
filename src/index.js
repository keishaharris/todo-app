// Model (data)
class task  {
    constructor(title,description,priority,notes,date){
    this.title = title,
    this.description = description,
    this.priority = priority,
    this.notes = notes,
    this.date = date
    }
}

function handleSumbit(e){
    e.preventDefault();

    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const priority = document.getElementById('priority').value;
    const notes = document.getElementById('notes').value;
    const dueDate = document.getElementById('date').value;


    let newTask = new task(title, description, priority, notes, dueDate)
    localStorage.setItem("newtask", JSON.stringify(newTask));

return localStorage;
}

// View(Display Data/DOM manipulation)
const content= document.getElementById('content');


// Controller (mediator)
const submitBtn = document.getElementById('task-form');
submitBtn.addEventListener('submit', handleSumbit);









