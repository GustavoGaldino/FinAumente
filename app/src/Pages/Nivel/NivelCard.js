import React from 'react'

const NivelCard = ({ children, title, description }) => {
    return (
        <div className="nivel-card">
            <div className="icon-div" >
                { children }
            </div>
            <div className="card-info">
                <h1>{title}</h1>
                <br></br>
                <span>{description}</span>
            </div>
        </div>
    )
}

export default NivelCard;