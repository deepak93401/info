import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import { FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Contactimg from "../imaige/banner.jpg"
import "./Login.css"

function Login() {
                              //  const [loacaldata,setLocaldata]=useState([])

                              //  const [login,setLogin]=useState([])
                              const history=useNavigate()
                                    function Loginvalidation(e){
                                      

                                     
                                      e.preventDefault()
                                  
                                      const [useremail,userpassword]=e.target;
                                      

                                    
                                      let product={
                                    
                                        useremail:useremail.value,
                                        userpassword:userpassword.value,
                                        

                                      }
                                      // console.log(product)
                                      e.target.reset()

                                      let result=true;
                                      let emailpattarn=/^([A-Za-z0-9])+@([A-Za-z0-9])+\.([A-Za-z]{2,4})$/;
                                      

                                      if(product.useremail===""){
                                          document.getElementById("emerror").innerHTML="please fill Email id"
                                          result=false
                                      }
                                      else if(!product.useremail.match(emailpattarn)){
                                        document.getElementById("emerror").innerHTML="please fill valid Email"
                                        result=false
                                      }
                                      else{
                                        document.getElementById("emerror").innerHTML=""
                                      }

                                      if(product.userpassword===""){
                                        document.getElementById("pwerror").innerHTML="please fill password"
                                        result=false
                                      }
                                  
                                      else{
                                        document.getElementById("pwerror").innerHTML=""
                                    }
                                    if(result){
                                      result=false;
                                      //  let productsdata=[...login,product]
                                      //  setLogin(productsdata)
                                      //  console.log(productsdata)
                                      localStorage.setItem('token',true)
                                      let storedFromData=JSON.parse(localStorage.getItem('product'));
                                      console.log("storedata",storedFromData)
                                      const userlogin=storedFromData.filter((el,k)=>{
                                        return el.useremail===product.useremail && el.userpassword===product.userpassword
                                    //   if(storedFromData && storedFromData.length){
                                      // }             
                                     })
                                     console.log(userlogin)
                                         if(userlogin.length===0){
                                          alert("invalid detial")
                                         }
                                         else{
                                          alert("user login sucessfully")
                                          history("/")
                                         }
                                        // console.log(userlogin)
                                      // }

                                    
                                    }
                                    
                                   

                                    }
   
  return (
    <>
    <section id='Login'>

    <div className='container'>
      <div className='row'>
        <div className='col-md-6'>
        <div className='login-sec'>
    
    <form onSubmit={Loginvalidation} >

                    <h3 className="fw-normal mb-3 pb-3" >Log in</h3>

                    <div className="form-outline mb-4">
                    <label className="form-label" >Email address</label>
                    <input type="text" className="form-control" id="formemail"  name='useremail'/>
                   
                    <p id="emerror" className="error"></p>
                    </div>

                    <div className="form-outline mb-4">
                    <label className="form-label" >Password</label>
                    <input type="password"  className="form-control" id="formpassword" name='userpassword'/>
                    
                    <p id="pwerror" className="error"></p>
                     
                    </div>

                    <div className="pt-1 mb-4">
                    <button type="submit" className="Contact-btn">login</button>
                    </div>

                    <p className="small mb-5 pb-lg-2"><a className="fpassword"  href="#!">Forgot password?</a></p>
                    <p>Don't have an account?  <Link to="/Resiter"  className='Rlink'>Resister</Link></p>

        </form>
                                              
        </div>
                </div>                               
                                              
                                       
                                      


      
  

   
    

        <div className='col-md-6'>
                     <div className="login-img">
                                     <img src={Contactimg}></img>
                       </div>
        </div>
      </div>
    </div>
   
    </section>
   
     
    </>
    
  )
}

export default Login
