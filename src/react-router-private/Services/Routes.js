import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../Home';
import Contact from '../Contact';
import Login from '../Login';
import PrivateRoute from '../PrivateRoute';

export default function myRoutes() {
    return (
        <Router>
                <Routes>
                    <Route path="/" element={<Login />}></Route>
                    <Route path="/home" element={<PrivateRoute children={<Home />} />}></Route>
                    <Route path="/contact" element={<PrivateRoute children={<Contact />} />}></Route>
                </Routes>
        </Router>
    )
}