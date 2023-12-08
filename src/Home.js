import React from "react";
import About from "./About";
import Service from "./Service";
import Portfolio from "./Portfolio";
import Blog from "./Blog";
import Contact from "./Contact";
import Footer from "./Footer";
import { IoIosArrowUp } from "react-icons/io";


function Home(){
     let Up=function Scrollup(){
        window.scrollTo(0,-1000)
     }
   
     window.addEventListener("scroll",myapp)
     function myapp(){
        // console.log("...scrolling")
        let x=window.pageYOffset;
        if(x===0 || x===950)
        {
            document.getElementById('Display-btn').style.display="none";
        }
        else{
            document.getElementById('Display-btn').style.display="block";
        }
        

     }
    return(
        <>
        
        <section id="Home">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="Home_sec">
                            <p className="Home-pera">WELCOME TO MY WORLD</p>
                            <h1 className="Home-head">Hi, Im Jone Doe</h1>
                            <span className="Home-span">Js Developer.</span>
                            <h2 className="Home-head2">based in USA.</h2>


                         </div>
                         <button className="scroll-btn" onClick={Up} id="Display-btn">
                         <IoIosArrowUp  className="scroll-icon"/>
                         </button>
                    </div>
                  
                
                </div>
            </div>

        </section>
         <About></About>
        <Service></Service>
        <Portfolio></Portfolio> 
        <Blog></Blog>
        <Contact></Contact>
        <Footer></Footer>
        
        </>
    )
}
export default Home;