import projects from "./projects";
import View from "./View";


//HANDLE TASK DATA
// function handleTaskSumbit(e){
//     e.preventDefault();
// }

let showForm = document.getElementById('pForm');

function handleProjectSubmit(e){
    e.preventDefault();
    const title = document.getElementById('pTitle').value;
    console.log('form submitted');

    projects.addProject(title);
    projects.saveProject();
    View.clearForm(e);
    View.renderProjects();
    showForm.style.display="none";

}

const submitProjectBtn = document.getElementById('project-form');
submitProjectBtn.addEventListener('submit', handleProjectSubmit);

// const submitTaskBtn = document.getElementById('task-form');
// submitTaskBtn.addEventListener('submit', handleTaskSumbit);

const projectBtn = document.getElementById('add');
projectBtn.addEventListener('click', function(){
    
    showForm.style.display="block";
})