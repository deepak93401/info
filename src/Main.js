import React from "react";
import Header from "./Header/Header.js";
// import "./Trydo.css"
import "./media.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Home/Home.js";
import About from "./About/About.js";
import Service from "./Service/Service.js";
import Portfolio from "./Portfolio/Portfolio.js";
import Blog from "./Blog/Blog.js";
import { Route,Routes } from "react-router-dom";
import Contact from "./Contact/Contact.js";
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