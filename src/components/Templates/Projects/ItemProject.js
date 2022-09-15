import React, { useState, useEffect } from "react";
import axios from "axios";
import { PencilSquare, Trash3 } from 'react-bootstrap-icons';

const ItemProject = ({ project }) => {
    const BASE_URL = window.location.origin;
    //state=====================
    const [users, setUsers] = useState([]);
    const [sigleUser, setSingleUser] = useState({});

    useEffect(() => {
        axios.get(`${BASE_URL}/wp-json/api/v1/users`)
            .then((response) => {
                let users = response.data
                let user = users.find((u) => u.ID === project.id)
                setSingleUser(user);
                console.log('users===', user);
            }).catch((error) => console.error(`Error:${error}`))
    }, []);
    // console.log('users===',users);
    return (
        <div className="col-12 col-lg-4 col-md-6">
            <div className="project-item">
                <div className="project__container">
                    <h2>{project.name}</h2>
                    <p className="project__description">{project.descriptions}</p>
                    <div className="d-flex justify-content-between align-items-center project__footer">
                        <div className="project__user">
                            {
                                sigleUser ?
                                    <div className="project__user-image">
                                        <img src={sigleUser.image} />
                                    </div>
                                    : null
                            }
                        </div>
                        <div className="d-flex align-items-center project__actions">
                            <div className="project__edit">
                                <button>
                                    <PencilSquare />
                                </button>
                            </div>
                            <div className="project__delete">
                                <button>
                                    <Trash3 />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ItemProject;