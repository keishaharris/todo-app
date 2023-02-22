
const projects = (() => {
    let projectList = [];

    class Project {
        constructor(title){
            this.title = title,
            this.tasks =[]
        }
    }

    function addProject(title){
        const newProject = new Project(title);
        projectList.push(newProject);

        return projectList;

    }

    function saveProject(){
    
        localStorage.setItem('project', JSON.stringify(projectList))
        console.log(projectList);
    }

    function getProjects(){
        let retrieveData; 
        const localData = localStorage.getItem('project');
        if( localData === null){
            retrieveData = [];
        }
        else {
            retrieveData = JSON.parse(localData)
            projectList = retrieveData
        }

        return projectList;
    }
    return {projectList, addProject, saveProject, getProjects}
})();


export default projects;