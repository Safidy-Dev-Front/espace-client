import React, { useEffect, useState } from "react";
import axios from "axios";
import Classic from "../Fields/classic";
import Textarea from "../Fields/textarea";
import SelectUser from "../Customs/SelectUser";
const EditProject = ({project}) => {
    const BASE_URL = window.location.origin;
    const [name, setName] = useState(project.name);
    const [descriptions, setDescriptions] = useState(project.descriptions);
    const [userId, setUserId] = useState();

    const handleChangeName = (e) => {
        let value = e.target.value
        setName(value)
    }
    const handleChangeDescription = (e) => {
        let value = e.target.value
        setDescriptions(value)
    }
    const handleUserId = (idUser) => {
        console.log(idUser);
        setUserId(idUser);
    }
    //Submit modif===================
    const handleSubmitProject = (e)=>{
        e.preventDefault()
        axios.put(`${BASE_URL}/wp-json/project/v1/setproject`, {
            name:name,
            description: descriptions,
            user: 1,
            ID:project.id
        }).then((response)=>{
            console.log('ready');
            console.log(response);
        }).catch((error)=>console.error(error))
    }
    return (
        <div id="edit-project" className="edit-project">
            <div className="edit-project__container">
                <div className="edit-project__header">
                    <h3>Modification de Projet</h3>
                </div>
                <div className="edit-project__form">
                    <form onSubmit={handleSubmitProject}>
                        <div className="edit-project__field">
                            <Classic
                                funcionProps={handleChangeName}
                                type="text"
                                placeholder=""
                                idInput='name-project'
                                label="Nom du Projet"
                                defaultValue={name}
                            />
                        </div>
                        <div className="edit-project__field">
                            <Textarea
                                label="Descriptions"
                                functionOnChange={handleChangeDescription}
                                defaultValue={descriptions}
                            />
                        </div>
                        <div className="edit-project__field">
                            <SelectUser functionUser={handleUserId} />
                        </div>
                        <div className="edit-project__field">
                            <input type="submit" className="btn form-add-project__btn-add" value="Enregistrer" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default EditProject