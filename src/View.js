import projects from "./projects";

const View = (() => {

// Project Elements

const projectTitle = document.getElementById('pTitle').value


// // Task Elements 

// const taskTitle = document.getElementById('title').value;
// const description = document.getElementById('description').value;
// const priority = document.getElementById('priority').value;
// const notes = document.getElementById('notes').value;
// const dueDate = document.getElementById('date').value;



//Dom Elements
let projectContent = document.getElementById('projectList');

//CLEAR form
function clearForm(e){
    e.target.reset();
}

function renderProjects(){
  
    projectContent.innerHTML = '';

    projects.projectList.forEach(project => {
        let projectDiv = document.createElement('div');
        let li = document.createElement('li');
        let h1 = document.createElement('h1');
        h1 = project.title;
        li.append(h1);
        projectDiv.append(li);
        projectContent.append(projectDiv);
        
    })

}

return {
    renderProjects,
    clearForm,
}

})();

export default View;