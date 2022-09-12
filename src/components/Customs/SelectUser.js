import React, { useState, useEffect } from "react";
import axios from "axios";
const SelectUser = ()=>{
    const BASE_URL = window.location.origin;
    //State users===============
    const [users, setUsers] = useState([]);
    const [usersSelected, setUsersSelected ] = useState({});
    useEffect(() => {
        axios.get(`${BASE_URL}/wp-json/api/v1/users`)
            .then((response) => {
                setUsers(response.data)
            }).catch((error) => console.error(`Error:${error}`))
    }, []);
    const onSelectClient = (e) =>{
        const user_selected = users.find((u)=>u.ID === e.target.getAttribute('value')) 
        setUsersSelected(user_selected);
    }
    return(
        <div className="container__select-client">
            <div className="select-client__selected">
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
            <ul className="select-client__wrapper">
                {
                 users.map((user, index)=>{
                        return <li onClick={onSelectClient} key={index} value={user.ID}>
                                <div className="d-flex  select-client__item" value={user.ID}>
                                    <div className="select-client__image" value={user.ID}>
                                        <img src={user.image} value={user.ID}/>
                                    </div>
                                    <div className="select-client__name-job" value={user.ID}>
                                        <p className="select-client__name" value={user.ID}>
                                            {user.display_name}
                                        </p>
                                        <p className="select-client__company" value={user.ID}>
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
