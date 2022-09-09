import React from "react";
import Classic from "../Fields/classic";
import Textarea from "../Fields/textarea";
const FormNewPage = ()=>{
    const handleChangeName=(e)=>{
        let value = e.target.value;
        console.log(value);
    }
    const handleChangeDescription = (e)=>{
        let value = e.target.value;
        console.log(value);
    }
    return (
        <form>
            <div className="form-add-project__item">
                <Classic 
                funcionProps={handleChangeName}
                type="text"
                placeholder=""
                idInput='name-project'
                label="Nom du Projet"/>
            </div>
            <div className="form-add-project__item">
                <Textarea 
                label="Descriptions"
                functionOnChange={handleChangeDescription}
                />
            </div>
        </form>
    )
}
export default FormNewPage