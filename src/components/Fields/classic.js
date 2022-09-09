import React from "react";
const Classic = ({ funcionProps, type, placeholder, idInput , label}) => {
    return (
        <div className="input-classic">
            <label htmlFor={idInput}>{label}</label>
            <input
                type={type}
                onChange={funcionProps}
                placeholder={placeholder}
                className="form-control"
            />
        </div>
    )
}
export default Classic 