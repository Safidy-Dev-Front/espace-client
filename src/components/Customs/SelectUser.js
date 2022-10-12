import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
const SelectUser = ({functionUser, idUserEdit})=>{
    const BASE_URL = window.location.origin;
    //State users===============
    const [companies, setCompanies] = useState([]);
    const [companySelected, setCompanySelected ] = useState({});
    //Class ====================
    const [class_ul, setClass_ul] = useState(false);

    //Ref=======================
    const client_wrapper = useRef(null)
    useEffect(() => {
        axios.get(`${BASE_URL}/wp-json/wp/v2/company`)
            .then((response) => {
                setCompanies(response.data)
            }).catch((error) => console.error(`Error:${error}`));
    }, []);
    const onToggleClient = ()=>{
        setClass_ul(!class_ul)    
    }
    const onSelectClient = (id) =>{
        const company_selected = idUserEdit ? idUserEdit : companies.find((comp)=>comp.id === id) 
        setCompanySelected(company_selected);
        setClass_ul(false)
        functionUser(id)
    }
    
    return(
        <div className="container__select-client">
            <div className="select-client__selected" onClick={onToggleClient}>
                {
                    companySelected.title ? 
                    <div className="client_selected_item d-flex align-items-center">
                         <div className="client_selected_image">
                            <img src={companySelected.acf.logo_company}/>
                         </div>
                        <div className="select-client__name-job">
                            <p className="select-client__name">
                                {companySelected.title.rendered}
                            </p>
                        </div>
                    </div>
                    :
                    <div className="select-client__text">
                        <p>Sélectioné un Entreprise</p>
                    </div>
                    
                }
            </div>
            <ul ref={client_wrapper} className={class_ul?"select-client__wrapper isShow": "select-client__wrapper"}>
                {
                 companies.map((company, index)=>{
                        return <li onClick={()=>onSelectClient(company.id)} key={index} >
                                <div className="d-flex  select-client__item" >
                                    <div className="select-client__image" >
                                        <img src={company.acf.logo_company} />
                                    </div>
                                    <div className="select-client__name-job" >
                                        <p className="select-client__name" >
                                            {company.title.rendered}
                                        </p>
                                    </div>
                                </div>
                            </li>
                 }) 
                }
            </ul>
        </div>
    )
}
export default SelectUser;
