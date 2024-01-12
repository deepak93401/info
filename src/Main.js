import React from "react";
import Header from "./Header";
import "./Trydo.css"
import "./media.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Home.js"
import About from "./About.js";
import Service from "./Service.js";
import Portfolio from "./Portfolio.js";
import Blog from "./Blog.js";
import { Route,Routes } from "react-router-dom";
import Contact from "./Contact";
// import Resiter from "./Resiter.js";
// import Login from "./Login.js";

function Main(){
    return(
        <>
         {/* <Header/> */}
         <Routes>
         <Route path="/" element={<Home/>}/> 
            <Route path="/About"  element={<About/>}/>
            <Route path="/service"  element={<Service/>}/>
            <Route path="/portfolio" element={<Portfolio/>}/>
            <Route path="/Blog" element={<Blog/>}/>
            <Route path="/Contact" element={<Contact/>}/>
         </Routes>
        </>
    )
}
export default Main;