import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
const SelectUser = ()=>{
    const BASE_URL = window.location.origin;
    //State users===============
    const [users, setUsers] = useState([]);
    const [usersSelected, setUsersSelected ] = useState({});
    //Class ====================
    const [class_ul, setClass_ul] = useState(false);

    //Ref=======================
    const client_wrapper = useRef(null)
    useEffect(() => {
        axios.get(`${BASE_URL}/wp-json/api/v1/users`)
            .then((response) => {
                setUsers(response.data)
            }).catch((error) => console.error(`Error:${error}`))
    }, []);
    const onToggleClient = ()=>{
        setClass_ul(!class_ul)    
    }
    const onSelectClient = (id) =>{
        const user_selected = users.find((u)=>u.ID === id) 
        setUsersSelected(user_selected);
        setClass_ul(false)    

    }
    return(
        <div className="container__select-client">
            <div className="select-client__selected" onClick={onToggleClient}>
                {
                    usersSelected.display_name ? 
                    <div className="client_selected_item d-flex align-items-center">
                         <div className="client_selected_image">
                            <img src={usersSelected.image}/>
                         </div>
                        <div className="select-client__name-job">
                            <p className="select-client__name">
                                {usersSelected.display_name}
                            </p>
                            <p className="select-client__company">
                                {usersSelected.company}
                            </p>
                        </div>
                    </div>
                    :
                    <div className="select-client__text">
                        <p>Sélectioné un client</p>
                    </div>
                }
            </div>
            <ul ref={client_wrapper} className={class_ul?"select-client__wrapper isShow": "select-client__wrapper"}>
                {
                 users.map((user, index)=>{
                        return <li onClick={()=>onSelectClient(user.ID)} key={index} >
                                <div className="d-flex  select-client__item" >
                                    <div className="select-client__image" >
                                        <img src={user.image} />
                                    </div>
                                    <div className="select-client__name-job" >
                                        <p className="select-client__name" >
                                            {user.display_name}
                                        </p>
                                        <p className="select-client__company" >
                                            {user.company}
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
