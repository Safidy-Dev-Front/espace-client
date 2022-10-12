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
    const [projectEdited, setprojectEdited] = useState([]);
    const [classNewProject, setClassNewProject] = useState('container_add-new-project')
    const [editProjectWhere, setEditProjectWhere] = useState(false)
    //Function: action User==============
    const handleShowAddProject = (e) => {
        e.preventDefault();
        setClassNewProject('container_add-new-project isShow')
    }
    const closeAddProject = (e) => {
        e.preventDefault();
        setClassNewProject('container_add-new-project')
    }
    const getProjects = ()=>{
        axios.get(`${BASE_URL}/wp-json/project/v1/projects`)
        .then((response) => {
            setProjects(response.data)
        }).catch((error) => console.error(`Error:${error}`))
    }
    useEffect(() => {
        getProjects();
        const getProject = setInterval(()=>{
        getProjects();
        }, 1000)
        return () => clearInterval(getProject)
    },[]);
    const handleEditProject = (idProject) => {
        const projetSet = projects.find((p) => p.id === idProject);
        setprojectEdited(projetSet)
        console.log('projectset', projetSet);
        setEditProjectWhere(true);
    }
    const handleDeleteProject=(idProject)=>{
        axios.delete(`${BASE_URL}/wp-json/project/v1/deleteproject`, { data:{id_project:idProject}})
        .then((response) => {
            console.log('idProject=>', idProject);
        }).catch((error) => console.error(`Error:${error}`))
    }
    return (
        <div id="home-page">
            <div className="container-home">
                <div className="project-list__flex">
                    <div className="row">
                        {
                            projects.map((project, index) => {
                                return <ItemProject
                                    key={index} project={project}
                                    functionEdit={handleEditProject}
                                    functionDelete={handleDeleteProject}
                                />
                            })
                        }
                    </div>
                </div>
                <AddNewProject
                    classNewProject={classNewProject}
                    dismissFunction={closeAddProject} />
                {
                    editProjectWhere ?
                        <EditProject project={projectEdited} handleClose={() => {
                            setEditProjectWhere(false)
                        }} />
                        : null
                }
                <AddProject handleFunction={handleShowAddProject} />
            </div>
        </div>
    )
}
export default Home