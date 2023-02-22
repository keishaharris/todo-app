import projects from "./projects";

const View = (() => {

// Project Elements

const projectTitle = document.getElementById('pTitle').value


// Task Elements 

const taskTitle = document.getElementById('title').value;
const description = document.getElementById('description').value;
const priority = document.getElementById('priority').value;
const notes = document.getElementById('notes').value;
const dueDate = document.getElementById('date').value;



//Dom Elements

let content = document.getElementById('content');

//CLEAR form
function clearForm(e){
    e.target.reset();
}

function renderProjects(){
    let projectContent = document.getElementById('content');

    projects.projectList.forEach(project => {
        projectContent.innerHTML = project.title;
    })

}

return {
    renderProjects,
    clearForm
}

})();

export default View;