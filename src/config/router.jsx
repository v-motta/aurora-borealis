import React from "react";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import About from "../pages/About/About";
import Home from "../pages/Home/Home";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<Navigate to="/home" replace />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </BrowserRouter>
    )    
}

export default Router;