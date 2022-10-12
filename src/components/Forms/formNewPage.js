import React , {useState} from "react";
import axios from "axios";
import SelectUser from "../Customs/SelectUser";
import Classic from "../Fields/classic";
import Textarea from "../Fields/textarea";

const FormNewPage = ()=>{
    const BASE_URL = window.location.origin;
   //state==================
   const [name, setName] = useState('');
   const [description, setDescription]= useState('');
   const [userId, setUserId] = useState();
   //action ================
    const handleChangeName=(e)=>{
        let value = e.target.value;
        setName(value);
    }
    const handleChangeDescription = (e)=>{
        let value = e.target.value;
        setDescription(value);
    }
    const handleUserId=(idUser)=>{
        console.log(idUser);
        setUserId(idUser);

    }
    const onSubmitProject = (e) =>{
        e.preventDefault()
        const projet = {
            name:name,
            description:description,
            id_user:userId,
            id_company: userId
        }
        axios.post(`${BASE_URL}/wp-json/project/v1/projectadd`,projet)
        .then(response =>{
            console.log(response);
            window.location.reload(false);
        })
        .catch(error=>console.error('There was an error!', error))
        console.log('Salut les gens');
    }
    return (
        <form onSubmit={onSubmitProject}>
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
            <div className="form-add-project__item">
                <SelectUser functionUser={handleUserId}/>
            </div>
            <div className="form-add-project__item">
                <input type="submit" className="btn form-add-project__btn-add" value="Ajouter"/>
            </div>
        </form>
    )
}
export default FormNewPage