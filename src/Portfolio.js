import React from "react";
import Port1 from "./imaige/portfolio1.jpg"
import Port2 from "./imaige/portfolio2.jpg"
import Port3 from "./imaige/portfolio3.jpg"
import Port4 from "./imaige/portfolio4.jpg"


function Portfolio(){
    return(
        <>
           <section id="Portfolio">
            <div className="container">
                <div className="row">
                     <div className="text-center"> 
                          <h2 className="port-head">My Latest Project</h2>
                          <p className="port-pera">There are many variations of passages of Lorem Ipsum available,
                            but the majority have suffered alteration.
                          </p>
                     
                     </div>
                </div>



                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                        <div className="Port-sec" >
                        <div className="Port-img Port-img1">
                            
                            <div className="Port-con">
                                  <p>Development</p>
                                  <h4>Getting tickets to the big show</h4>
                                  <button className="Port-btn">View Details</button>
                            </div>
                        </div>
                        </div>

                    </div>
                   
                   
                   
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                    <div className="Port-sec" >
                        <div className="Port-img Port-img2">
                    
                            <div className="Port-con">
                                  <p>Development</p>
                                  <h4>Getting tickets to the big show</h4>
                                  <button className="Port-btn">View Details</button>
                            </div>
                        </div>
                        </div>
                        
                        </div> 
                  
                  
                  
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                    <div className="Port-sec" >
                        <div className="Port-img Port-img3">
                        
                            <div className="Port-con">
                                  <p>Development</p>
                                  <h4>Getting tickets to the big show</h4>
                                  <button className="Port-btn">View Details</button>
                            </div>
                        </div>
                        </div>
                    </div>
               
            


        
                   
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                    <div className="Port-sec" >
                        <div className="Port-img Port-img4">
                    
                            <div className="Port-con">
                                  <p>Development</p>
                                  <h4>Getting tickets to the big show</h4>
                                  <button className="Port-btn">View Details</button>
                            </div>
                        </div>
                        </div>
                    </div>
                   
                   
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                    <div className="Port-sec" >
                        <div className="Port-img Port-img5">
                        
                            <div className="Port-con">
                                  <p>Development</p>
                                  <h4>Getting tickets to the big show</h4>
                                  <button className="Port-btn">View Details</button>
                            </div>
                        </div>
                        </div></div> 
                   
                   
                   
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                    <div className="Port-sec" >
                        <div className="Port-img Port-img6">
                
                            <div className="Port-con">
                                  <p>Development</p>
                                  <h4>Getting tickets to the big show</h4>
                                  <button className="Port-btn">View Details</button>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>


                <div className="row">
                    <div className="Port-button">
                     <div className="text-center"> 
                       <button className="Port-btn2">View More</button>
                     
                     </div>
                     </div>
                </div>
            </div>

            
             
           </section>
        </>
    )
}
export default Portfolio;