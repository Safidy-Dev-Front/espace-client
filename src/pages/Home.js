import React, { useState, useEffect } from "react";
import axios from "axios";
import AddProject from "../components/buttons/addProject"
import AddNewProject from "../components/Modales/addNewProject";
import ItemProject from "../components/Templates/Projects/ItemProject";
import EditProject from "../components/Modales/editProject";
const Home = () => {
    const BASE_URL = window.location.origin;
    const [projects, setProjects] = useState([]);
    //State  User Interface ==========
    const [showAddProject, setShowAddProject] = useState(false);
    const [classNewProject, setClassNewProject] = useState('container_add-new-project')
    //Function: action User===============
    const handleShowAddProject = (e)=>{
        e.preventDefault();
        setClassNewProject('container_add-new-project isShow')
    }
    const closeAddProject = (e)=>{
        e.preventDefault();
        setClassNewProject('container_add-new-project')
    }
    useEffect(() => {
        axios.get(`${BASE_URL}/wp-json/project/v1/projects`)
            .then((response) => {
                setProjects(response.data)
            }).catch((error) => console.error(`Error:${error}`))
    }, []);
    console.log('Projects =>', projects);
    return (
        <div id="home-page">
            <div className="container-home">
                <div className="project-list__flex">
                    <div className="row">
                        {
                            projects.map((project, index) => {
                                return <ItemProject key={index} project={project}/>
                            })
                        }
                    </div>
                </div>
                <AddNewProject 
                classNewProject={classNewProject} 
                dismissFunction={closeAddProject}/>
                <EditProject/>
                <AddProject handleFunction={handleShowAddProject}/>
            </div>
        </div>
    )
}
export default Home