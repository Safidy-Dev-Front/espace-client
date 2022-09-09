import React from "react";
const Textarea = ({ functionOnChange, label, idField, placeholder }) => {
    return (
        <div className="input-textarea">
            <label htmlFor={idField}>{label}</label>
            <textarea
                id={idField}
                onChange={functionOnChange}
                placeholder={placeholder}
                className="form-control">
            </textarea>
        </div>
    )
}
export default Textarea