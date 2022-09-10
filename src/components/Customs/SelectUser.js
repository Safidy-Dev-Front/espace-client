import React, { useState, useEffect } from "react";
import axios from "axios";
const SelectUser = ()=>{
    const BASE_URL = window.location.origin;
    //State users===============
    const [users, setUsers] = useState([]);
    useEffect(() => {
        axios.get(`${BASE_URL}/wp-json/wp/v2/users`)
            .then((response) => {
                setUsers(response.data)
            }).catch((error) => console.error(`Error:${error}`))
    }, []);
    console.log('users ==>',users);
    return(
        <div>
            <ul></ul>
        </div>
    )
}
export default SelectUser;
