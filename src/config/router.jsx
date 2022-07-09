import React from "react";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Home from "../pages/Home/Home";
import Landing from "../pages/Landing/Landing";
import Projects from "../pages/Projects/Projects";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<Navigate to="/" replace />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/developing" element={<Navigate to="/" replace />} />
                <Route path="/home" element={<Home />} />
                <Route path="/" element={<Landing />} />
                <Route path="/projects" element={<Projects />} />
            </Routes>
        </BrowserRouter>
    )    
}

export default Router;