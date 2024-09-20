import React from "react";

const Card = (props) => {
    return (
        <td className="Card">
            <div className="Card-image">
                <img src={props.image} alt={props.desert} />
            </div>
            <div className="Card-content">
                <h5>{props.desert}</h5>
                <p>{props.location}</p>
                <a href={props.link} className="Card-button">Learn More</a>
            </div>
        </td>
    );
}

export default Card;
