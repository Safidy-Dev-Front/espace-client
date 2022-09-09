import React, { useState, useEffect } from "react";
import axios from "axios";
import AddProject from "../components/buttons/addProject"
import AddNewProject from "../components/Modales/addNewProject";
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
                                return <div key={index} className="col-12 col-lg-4 col-md-6">
                                    <div className="project-item">
                                        <div className="project__container">
                                            <h2>{project.name}</h2>
                                            <p className="project__description">{project.descriptions}</p>
                                        </div>
                                    </div>
                                </div>
                            })
                        }
                    </div>
                </div>
                <AddNewProject classNewProject={classNewProject}/>
                <AddProject handleFunction={handleShowAddProject}/>
            </div>
        </div>
    )
}
export default Home