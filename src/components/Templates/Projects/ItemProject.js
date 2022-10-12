import React, { useState, useEffect } from "react";
import axios from "axios";
import { PencilSquare, Trash3, Eye } from 'react-bootstrap-icons';

const ItemProject = ({ project , functionEdit, functionDelete}) => {
    const BASE_URL = window.location.origin;
    //state=====================
    const [companies, setCompanies] = useState([]);
    const [sigleCompany, setSingleCompany] = useState({});

    useEffect(() => {
        axios.get(`${BASE_URL}/wp-json/wp/v2/company`)
            .then((response) => {
                let companies = response.data
                let company = companies.find((u) => u.ID === project.id_company)
                setSingleCompany(company);
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
                                sigleCompany ?
                                    <div className="project__user-image">
                                        <img src={sigleCompany.image} />
                                    </div>
                                    : null
                            }
                        </div>
                        <div className="d-flex align-items-center project__actions">
                            <div className="project__edit">
                                <button>
                                    <Eye />
                                </button>
                            </div>
                            <div className="project__edit">
                                <button onClick={()=>functionEdit(project.id)}>
                                    <PencilSquare />
                                </button>
                            </div>
                            <div className="project__delete">
                                <button onClick={()=>functionDelete(project.id)}>
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