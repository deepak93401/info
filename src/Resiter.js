import React, { useState } from 'react'
import { Link } from "react-router-dom";
import Contactimg from "./imaige/banner.jpg"


function Resiter() {
          

        function Res(e) {
                         
      e.preventDefault()
      const [userfname,userlname,useremail,userpassword,usercpassword]=e.target;



      let product={
        userfname:userfname.value,
        userlname:userlname.value,
        useremail:useremail.value,
        userpassword:userpassword.value,
        usercpassword:usercpassword.value,


      }
      console.log(product)
      e.target.reset()

      let result=true;
      let emailpattarn=/^([A-Za-z0-9])+@([A-Za-z0-9])+\.([A-Za-z]{2,4})$/;

      if(product.userfname==""  ){
        document.getElementById('userferror').innerHTML="please fill user name";

         result=false

    }



    else if(product.userfname.length<2 ){
        document.getElementById('userferror').innerHTML="please fill user name os required  min 2 char";
        result=false

    }
    else {
        document.getElementById('userferror').innerHTML="";

    }


    if(product.userlname==""  ){
      document.getElementById('userlerror').innerHTML="please fill user name";

       result=false

  }



  else if(product.userlname.length<2 ){
      document.getElementById('userlerror').innerHTML="please fill user name os required  min 2 char";
      result=false

  }
  else {
      document.getElementById('userlerror').innerHTML="";

  }

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


      if(product.usercpassword===""){
        document.getElementById("cpwerror").innerHTML="please fill confrom password"
        result=false
      }

      else if(product.usercpassword!==product.userpassword){
        document.getElementById("cpwerror").innerHTML="passwordnot match"
        result=false 
      }

      else{
        document.getElementById("cpwerror").innerHTML=""
    }
    if(result){
      result=false;

      let storedFromData=JSON.parse(localStorage.getItem('product'))||[];
      localStorage.setItem('product',JSON.stringify([...storedFromData,product]))
     
      // savelocal(product)
      // let productsdata=[...login,product]
      // setLogin(productsdata)
      // console.log(productsdata)
    }

}


// function savelocal(product){
      
//       //  storedFromData=JSON.parse(localStorage.getItem('product'))||[];
//       //  setLocaldata(storedFromData)
//   }



  return (
    <>
  
      <section id='Resiter'>

        <div className='container'>
          <div className='row'>
             <div className='col-md-6'>
             <div className='Resiter-sec'>

                      <form onSubmit={Res}>

                        <h3 className="fw-normal mb-3 pb-3" >sign up</h3>

                        <div className="form-outline mb-4">
                          <label className="form-label">first name</label>
                          <input type="text" className="form-control"  id=""  name='userfname' />
                          <p id="userferror" className="error"></p>

                        </div>

                        <div className="form-outline mb-4">
                          <label className="form-label" >last name</label>
                          <input type="text" className="form-control" id="" name='userlname' />
                          <p id="userlerror" className="error"></p>

                        </div>


                        <div className="form-outline mb-4">
                          <label className="form-label">Email address</label>
                          <input type="email" className="form-control" id="" name='useremail' />
                          <p id="emerror" className="error"></p>

                        </div>

                        <div className="form-outline mb-4">
                          <label className="form-label" >Password</label>
                          <input type="password" className="form-control" id="" name='userpassword' />
                          <p id="pwerror" className="error"></p>
                        </div>


                        <div className="form-outline mb-4">
                          <label className="form-label" > conform Password</label>
                          <input type="password" className="form-control" id="" name='usercpassword' />
                          <p id="cpwerror" className="error"></p>

                        </div>

                        <div className="pt-1 mb-4">
                        <button type="submit" className="Contact-btn">Register</button>
                        </div>


                        <p className="small mb-5 pb-lg-2"><a className="fpassword" href="">Forgot password?</a></p>
                        <p>Don't have an account? <Link to="/login" className="Rlink" >Login</Link></p>




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

export default Resiter;
