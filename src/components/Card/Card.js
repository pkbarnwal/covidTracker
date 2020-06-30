import React from "react";
import './Card.css';

const card = props =>{
    return(
       <div className="card-body">
            <h2>{props.children}</h2>
            <p>THis is card Page</p>

        </div>
    );

};
export default card;