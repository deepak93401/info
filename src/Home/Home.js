import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import About from "../About/About";
import Service from "../Service/Service";
import Portfolio from "../Portfolio/Portfolio";
import Blog from "../Blog/Blog";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import { IoIosArrowUp } from "react-icons/io";
import "./Home.css"

function Home(){    

    const [btn,setBtn]=useState(false)

    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            console.log(window.scrollY)
            if(window.scrollY >100){
                setBtn(true)
            }
            else{
                setBtn(false)  
            }
        })
            
    },[btn])

     const scrollup=()=>{
        window.scrollTo({
            top:0,
            behavior:"smooth"
        })
     }
   
    // let Up=function Scrollup(){
    //     window.scrollTo(0,-1000)
    //  }
    
    // useEffect(()=>{
    //       Up()
      
    //      window.addEventListener("scroll",myapp)
    //      function myapp(){
    //         // console.log("...scrolling")
    //         let x=window.pageYOffset;
    //         if(x===0 || x===950)
    //         {
    //             document.getElementById('Display-btn').style.display="none";
    //         }
    //         else{
    //             document.getElementById('Display-btn').style.display="block";
    //         }
            
    
    //      }
    // },[Up])
    //    const arr=['Js Developer',"UX/UI Designer","Content Writer"];
    //    const [index,setIndex]=useState(0)

    //    useEffect(()=>{
    //       if(index===arr.length){
    //         setIndex(0)
    //       }
    //       setTimeout(()=>{
    //           setIndex(index+1)
    //       },2000)
    //    },[index,arr.length])
      

    return(
        <>
        {/* <Header/> */}
        <section id="Home">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="Home_sec">
                            <p className="Home-pera">WELCOME TO MY WORLD</p>
                            <h1 className="Home-head">Hi, Im Jone Doe</h1>
                         {/* <span className="Home-span">{arr[index]}</span> */}
                              
                           
                            <h2 className="Home-head2">based in USA.</h2>


                         </div>
                         {
                                btn && (<button className="scroll-btn"  id="Display-btn">
                                <IoIosArrowUp  className="scroll-icon" onClick={scrollup}/>
                                </button>)
                              }
                         
                    </div>
                  
                
                </div>
            </div>

        </section>
         <About></About>
        <Service></Service>
        <Portfolio></Portfolio> 
        <Blog></Blog>
        <Contact></Contact>
    
        
        </>
    )
}
export default Home;