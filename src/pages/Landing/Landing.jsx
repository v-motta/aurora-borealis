import React from "react";
import "./Landing.css";
import { Link } from "react-router-dom";

import logoAurora from "../../assets/images/aurora-logo-white.png";
import logoLovestruck from "../../assets/images/lovestruck-logo.png";
import logoTimekeeper from "../../assets/images/time-keeper-logo.png";
import logoAurostars from "../../assets/images/aurostars-logo.png";

import LandingButton from "../../components/LandingButton/LandingButton";

const Landing = () => {
    return (
        <div className="full-background">
            <div className="d-flex justify-content-center">
                <Link to="/home" className="link-logo-aurora-landing">
                    <img src={logoAurora} alt="" className="logo-landing" />
                </Link>
            </div>
            <div className="nav-landing-buttons d-flex justify-content-around">
                <LandingButton to="/developing" img={logoLovestruck} alt="Logo do Lovestruck" className="logo-lovestruck" />
                <LandingButton to="/developing" img={logoTimekeeper} alt="Logo do Time Keeper" className="logo-timekeeper" />
                <LandingButton to="/developing" img={logoAurostars} alt="Logo do Aurostars" className="logo-aurostars" />
            </div>
        </div>
    )    
}

export default Landing;
