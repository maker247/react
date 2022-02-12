import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import Blogs from "./Blogs";
import Blog from "./Blog";
import Contact from "./Contact";
import NotFound from "./NotFound";
const App = () => {
return (
<Router>
    <Routes>
        <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            {/* <Route path="blogs" element={<Blogs />} />
            <Route path="blogs/:slug" element={<Blog />} /> */}
            <Route path="blogs" element={<Blogs />}>
                <Route index element={<h2>Select an Blog</h2>}></Route>
                <Route path=":slug" element={<Blog />}></Route>
            </Route>    
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
        </Route>
    </Routes>
</Router>
);
}
export default App