import React from "react";
const Classic = ({ funcionProps, type, placeholder, idInput , label, defaultValue}) => {
    return (
        <div className="input-classic">
            <label htmlFor={idInput}>{label}</label>
            <input
                type={type}
                onChange={funcionProps}
                placeholder={placeholder}
                className="form-control"
                value={defaultValue}
            />
        </div>
    )
}
export default Classic 