import React from "react";
import "./LandingButton.css";
import { Link } from "react-router-dom";

const LandingButton = (props) => {
    return (
        <Link to={props.to} className="landing-button d-flex justify-content-center align-items-center">
            <img src={props.img} alt={props.alt} className={props.className} />
        </Link>
    )    
}

export default LandingButton;