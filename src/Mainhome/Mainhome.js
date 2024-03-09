import React from 'react'
import "./Mainhome.css"

function Mainhome() {
  return (
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
                         {/* <button className="scroll-btn"  id="Display-btn">
                         <IoIosArrowUp  className="scroll-icon"/>
                         </button> */}
                    </div>
                  
                
                </div>
            </div>

        </section>
   
   </>
  )
}

export default Mainhome
