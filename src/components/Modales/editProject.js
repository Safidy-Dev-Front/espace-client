import React, { useEffect, useState } from "react";
import Classic from "../Fields/classic";
import Textarea from "../Fields/textarea";
import SelectUser from "../Customs/SelectUser";
const EditProject = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [userId, setUserId] = useState();

    const handleChangeName = (e) => {
        let value = e.target.value
        setName(value)
    }
    const handleChangeDescription = (e) => {
        let value = e.target.value
        setName(value)
    }
    const handleUserId = (idUser) => {
        console.log(idUser);
        setUserId(idUser);
    }

    return (
        <div id="edit-project" className="edit-project">
            <div className="edit-project__container">
                <div className="edit-project__header">
                    <h3>Modification de Projet</h3>
                </div>
                <div className="edit-project__form">
                    <form>
                        <div className="edit-project__field">
                            <Classic
                                funcionProps={handleChangeName}
                                type="text"
                                placeholder=""
                                idInput='name-project'
                                label="Nom du Projet"
                            />
                        </div>
                        <div className="edit-project__field">
                            <Textarea
                                label="Descriptions"
                                functionOnChange={handleChangeDescription}
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