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
import { Link, Route,Routes } from "react-router-dom";
import Contact from "./Contact";



function Main(){
    return(
        <>
         
         
         
         
         <Header/>
         <Routes>
            
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/About"  element={<About></About>}></Route>
            <Route path="/service"  element={<Service></Service>}></Route>
            <Route path="/portfolio" element={<Portfolio></Portfolio>}></Route>
            <Route path="/Blog" element={<Blog></Blog>}></Route>
            <Route path="/Contact" element={<Contact></Contact>}></Route>


            
         </Routes>
    
        

        
        </>
    )
}
export default Main;