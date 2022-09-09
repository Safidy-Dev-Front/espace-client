import React from "react";
import { Outlet } from "react-router-dom";

const Default = () =>{
    return(
        <div>
            <h1>Test Layouts</h1>
            <Outlet/>
        </div>
    )
}
export default Default