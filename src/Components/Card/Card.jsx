import React from "react";
import './Card.css'

const Card = ({ cardIndex, data }) => {
    return (
        <div className="card-container">
            {data[cardIndex].map(item => (
                <div className="card-item">
                    <img src={item.img} alt="" />
                    <div>{item.text}</div>
                </div>
            ))}
        </div>
    )
}

export default Card