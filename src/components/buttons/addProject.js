import React from "react";
const AddProject = ({handleFunction}) =>{

    return (
        <button
        onClick={handleFunction} 
        id="add-project_button" 
        className="btn btn-client-primary add-project">+</button>
    )
}
export default AddProject;