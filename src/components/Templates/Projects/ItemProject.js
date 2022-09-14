import React, { useState, useEffect } from "react";
import axios from "axios";
const ItemProject = ({ project }) => {
    const BASE_URL = window.location.origin;
    //state=====================
    const [users, setUsers] = useState([]);
    const [sigleUser, setSingleUser] = useState({});
    
    useEffect(() => {
        const obj ={
            id_user: project.id
        }
        console.log('id=', project.id);
        axios.get(`${BASE_URL}/wp-json/api/v1/usersingle`,obj)
            .then((response) => {
                setUsers(response.data);
                console.log('users===',response);
            }).catch((error) => console.error(`Error:${error}`))
    }, []);
    // console.log('users===',users);
    return (
        <div className="col-12 col-lg-4 col-md-6">
            <div className="project-item">
                <div className="project__container">
                    <h2>{project.name}</h2>
                    <p className="project__description">{project.descriptions}</p>
                </div>
                <div className="project__footer">
                    <div className="project__user">
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ItemProject;