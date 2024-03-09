import React  from "react";
import { IoIosBusiness } from "react-icons/io";
import { CgWebsite } from "react-icons/cg"; 
import { PiUsers } from "react-icons/pi";
import "./Service.css"




function Service(){
    return(
        <>
          <section id="Service">
               <div className="container">
                 
                  <div className="row">
                    <div className="col-lg-12">
                     <div className="text-center">
                          <h2 className="service-head">My Awesome Service</h2>
                          <p className="service-pera">There are many variations of passages of Lorem Ipsum available,
                            but the majority have suffered alteration.
                          </p>
                     </div>
                     </div>
                  </div>

                 
                  <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                         <div className="Service-con">
                         <IoIosBusiness className="icon" />
                         <h3>Bussiness stratagy</h3>
                        <p>I throw myself down among the tall grass by the stream as I lie close to the earth.</p>
                            
                         </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                    <div className="Service-con">
                       <CgWebsite  className="icon"/>
                         <h3>Website Development</h3>
                        <p>I throw myself down among the tall grass by the stream as I lie close to the earth.</p>
                            
                         </div>
                           
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                      <div className="Service-con">
                    <PiUsers className="icon" />
                         <h3>Marketing & Reporting</h3>
                        <p>I throw myself down among the tall grass by the stream as I lie close to the earth.</p>
                            
                         </div>
                    </div>
                  {/* </div> */}


                  {/* <div className="row"> */}
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                    <div className="Service-con">
                    <PiUsers className="icon" />
                         <h3>Mobile App Development</h3>
                        <p>I throw myself down among the tall grass by the stream as I lie  close to the earth.</p>
                            
                         </div>
                    </div>
                   
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                    <div className="Service-con">
                    <IoIosBusiness className="icon" />
                         <h3>Marketing & Reporting</h3>
                        <p>I throw myself down among the tall grass by the stream as I lie close to the earth.</p>
                            
                         </div>
                    </div>
                   
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                    <div className="Service-con">
                    <CgWebsite  className="icon"/>
                         <h3>Mobile App Developement</h3>
                        <p>I throw myself down among the tall grass by the stream as I lie close to the earth.</p>
                      </div>
                    </div>
                  </div>
              
               </div>
          </section>
        </>
    )
}
export default Service;