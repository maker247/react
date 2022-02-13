import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../Home';
import Albums from '../Albums';
import Album from '../Album';
import Login from '../Login';
import Contact from '../Contact';
import PrivateRoute from '../SecretRoute';

export default function myRoutes() {
    return (
        <Router>
                <Routes>
                    <Route path="login" element={<Login />}></Route>
                    <Route path="/" index element={<PrivateRoute children={<Home />} />}></Route>
                    <Route path="/albums" element={<PrivateRoute children={<Albums />} />}></Route>
                    <Route path="/albums/:id" element={<PrivateRoute children={<Album />} />}></Route>
                    {/* <Route path="albums" element={<PrivateRoute children={<Albums />} />}>
                        <Route index element={<h2>Select an Blog</h2>}></Route> 
                        <Route path=":id" element={<PrivateRoute children={<Album />} />}></Route>
                    </Route>     */}
                    <Route path="/contact" element={<PrivateRoute children={<Contact />} />}></Route>
                </Routes>
        </Router>
    )
}