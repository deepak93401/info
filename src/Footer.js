import React from "react";
import Logo2 from "./imaige/logo.png"
import { RiFacebookFill } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6"
import { FaTwitter } from "react-icons/fa";

function Footer(){
    return(
        <>
          <footer>
            <div className="container">
                <div className="row">
                      <div className="col-md-12">
                          <div className="foot-sec">
                              <div className="foot-logo">
                                  <img src={Logo2}></img>
                                  <h2>trydo</h2>
                              </div>
                              <div className="foot-icon">
                              <RiFacebookFill className="i-foot" />
                              <FaLinkedinIn  className="i-foot"  />
                              <FaInstagram  className="i-foot" />
                              <FaTwitter   className="i-foot" />
                              </div>
                              <div className="foot-con">
                               <p>Copyright © 2022 Rainbow-Themes. All Rights Reserved.</p>     
                              </div>
                          </div>
                      </div>
                </div>
            </div>
            
          </footer>
        
        </>
    )
}
export default Footer;