import React from "react";
import Blog1 from "../imaige/blog1.jpg";
import Blog2 from "../imaige/blog2.jpg";
import Blog3 from "../imaige/blog3.jpg";
import "./Blog.css"

function Blog(){
    return(
        <>
           <section id="Blog">
            <div className="container">
                <div className="row">
                     <div className="text-center"> 
                          <h2 className="blog-head">Latest News</h2>
                          <p className="blog-pera">There are many variations of passages of Lorem Ipsum available,
                            but the majority have suffered alteration.
                          </p>
                     
                     </div>
                </div>



                <div className="row">
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="Blog-sec" >
                        <div className="Blog-img">
                            <img src={Blog1}></img>
                            <div className="Blog-con">
                                  <p>Development</p>
                                  <h4>Getting tickets to the big show</h4>
                                  <button className="Blog-btn">Read more</button>
                            </div>
                        </div>
                        </div>

                    </div>
                   
                   
                   
                    <div className="col-lg-4 col-md-6 col-12">
                    <div className="Blog-sec" >
                        <div className="Blog-img">
                        <img src={Blog2}></img>
                            <div className="Blog-con">
                                  <p>Management</p>
                                  <h4>Management A big ticket gone to be an interesting</h4>
                                  <button className="Blog-btn">Read More</button>
                            </div>
                        </div>
                        </div>
                        
                        </div> 
                  
                  
                  
                    <div className="col-lg-4 col-md-6 col-12">
                    <div className="Blog-sec" >
                        <div className="Blog-img">
                        <img src={Blog3}></img>
                            <div className="Blog-con">
                                  <p>Design</p>
                                  <h4>The Home of the Future Could Bebes</h4>
                                  <button className="Blog-btn">Read more</button>
                            </div>
                        </div>
                        </div>
                    </div>
               
                </div>



             </div>
    
            
             
           </section>
        </>
    )
}
export default Blog;