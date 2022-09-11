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
    const onSelectClient = (idClient) =>{
        let clientSelected = users.find( client => client.ID === idClient)
        console.log(clientSelected); 
    }
    return(
        <div className="container__select-client">
            <div className="select-client__selected">
                {
                    usersSelected.display_name ?  
                        <div className="select-client__name-job">
                            <p className="select-client__name">
                                {usersSelected.display_name}
                            </p>
                            <p className="select-client__company">
                                {usersSelected.company}
                            </p>
                        </div>
                    :
                    <div className="select-client__name-job">
                        <p>Sélectioné un client</p>
                    </div>
                }
            </div>
            <ul className="select-client__wrapper">
                {
                 users.map((user, index)=>{
                        return <li key={index} >
                            <button onClick={onSelectClient}>
                                <div className="d-flex  select-client__item">
                                    <div className="select-client__image">
                                        <img src={user.image}/>
                                    </div>
                                    <div className="select-client__name-job">
                                        <p className="select-client__name">
                                            {user.display_name}
                                        </p>
                                        <p className="select-client__company">
                                            {user.company}
                                        </p>
                                    </div>
                                </div>
                            </button>
                            </li>
                 }) 
                }
            </ul>
        </div>
    )
}
export default SelectUser;
