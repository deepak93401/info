import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import { FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

function Login() {


                               const [login,setLogin]=useState([])
                                    function Loginvalidation(e){
                                      
                                      e.preventDefault()
                                      const [useremail,userpassword]=e.target;
                                

                                    
                                      let product={
                                    
                                        useremail:useremail.value,
                                        userpassword:userpassword.value,
                                        

                                      }
                                      console.log(product)
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
                                       let productsdata=[...login,product]
                                       setLogin(productsdata)
                                       console.log(productsdata)
                                    }

                                    }
   
  return (
    <>
    <section id='Login'>
    <div className='login-sec'>
    
    <form onSubmit={Loginvalidation} >

                    <h3 className="fw-normal mb-3 pb-3" >Log in</h3>

                    <div className="form-outline mb-4">
                    <label className="form-label" >Email address</label>
                    <input type="text"  className="form-control form-control-lg" name='useremail'/>
                   
                    <p id="emerror" className="error"></p>
                    </div>

                    <div className="form-outline mb-4">
                    <label className="form-label" >Password</label>
                    <input type="password"  className="form-control form-control-lg" name='userpassword'/>
                    
                    <p id="pwerror" className="error"></p>
                     
                    </div>

                    <div className="pt-1 mb-4">
                    <button className="btn btn-info btn-lg btn-block" type="submit" >Login</button>
                    </div>

                    <p className="small mb-5 pb-lg-2"><a className="text-muted" href="#!">Forgot password?</a></p>
                    <p>Don't have an account?  <Link to="/Resiter" >Resister</Link></p>

</form>
                                       
                                       
                                      
                                       
                                      


      
  

   
    </div>
    </section>
   
     
    </>
    
  )
}

export default Login
