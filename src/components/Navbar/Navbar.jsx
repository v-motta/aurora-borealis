import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

import logoAurora from "../../assets/images/aurora-logo-branco.png";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/home">
                    <img src={logoAurora} alt="" width="100px" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-link active" to="/home">Home</Link>
                        <Link className="nav-link" to="/about">Sobre</Link>
                        <Link className="nav-link" to="/projects">Projetos</Link>
                        <Link className="nav-link" to="/contact">Contato</Link>
                    </div>
                </div>
            </div>
        </nav>
    )    
}

export default Navbar;