import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Contactimg from "./imaige/banner.jpg"
import "./Trydo.css"
import "./media.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';

function Newform() {
        const [products,setproduct]=useState([])
        const [productindex,setproductindex]=useState()

        function Validateform(e){
            e.preventDefault()

            const [username,useremail,usersubject,usermessage]=e.target;
            let product={
                 username:username.value,
                 useremail:useremail.value,
                 usersubject:usersubject.value,
                 usermessage:usermessage.value
            }
            console.log(product)


            e.target.reset()

            let emailpattarn=/^([A-Za-z0-9])+@([A-Za-z0-9])+\.([A-Za-z]{2,4})$/;
            
            let result=true;


            if(product.username==""  ){
                document.getElementById('usererror').innerHTML="please fill user name";
              
                 result=false
              
            }
       
            
           
            else if(product.username.length<=8 ){
                document.getElementById('usererror').innerHTML="please fill user name os required  min 8 char";
                result=false
               
            }
            else {
                document.getElementById('usererror').innerHTML="";
                
            }
            
            


            
        
            if(product.useremail==""){
                document.getElementById('emailerror').innerHTML="please fill user email";
              
                result=false
                 
            }
       
            else if( !product.useremail.match(emailpattarn) ){
                document.getElementById('emailerror').innerHTML="please fill Valid email";
                 result=false
                 
            }

            else{
                document.getElementById('emailerror').innerHTML="";
                
            }
          
            
            if(product.usersubject=="" ){
                document.getElementById('subjecterror').innerHTML="please fill user subject";
               
                result=false
              
            }
      
            else if(product.usersubject.length<=3 ){
                document.getElementById('subjecterror').innerHTML="please min 4 word";
              
                result=false
             
            }
            else{
                document.getElementById('subjecterror').innerHTML="";
             
                               
            }

        
             
            if(product.usermessage ==""  ){
                document.getElementById('messageerror').innerHTML="please fill user message";
               
                result=false
              
            }
        
            else if(product.usermessage.length<=10){
                document.getElementById('messageerror').innerHTML="min 10 word";
                console.log(product.usermessage.length)
    
                result=false
               
            }
            else{
                document.getElementById('messageerror').innerHTML="";
               
            
               
            }
            if(result){
                setproduct([...products,product])
                result=false;
            }
    }


    const deletepeoduct=(index)=>{
        alert(index)
       
        products.splice(index,1)
     console.log([...products])
          setproduct([...products])
     }

     const Editproduct=(index)=>{
        
         let productforms=document.forms["productforms"]
        productforms.username.value=products[index].username;
        productforms.useremail.value=products[index].useremail;
        productforms.usersubject.value=products[index].usersubject;
        productforms.usermessage.value=products[index].usermessage;
         setproductindex(index)

         
     }

  return (
    <>
          <section id="Contact">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 order-2 order-lg-1">
                                <div className="Contact-sec">
                                    <h2>Hire Me.</h2>
                                    <p>I am available for freelance work. Connect with me via
                                         phone: <span>01923 088574</span> or email:<span>admin@example.com</span> 
                                    </p>

                                    {/* <form className="Contact-form" onSubmit={Validateform} name="productforms" > 
                                         <input className="mb-3" id="formGroupName" name="username" type="text" placeholder="Your name"  ></input>
                                         <p id="usererror" className="error"></p>
                                         <input className="mb-3" id="formGroupEmail" name="useremail" type="text" placeholder="Your email"  ></input>
                                         <p id="emailerror" className="error"></p>
                                         <input className="mb-3" id="formGroupSubject" name="usersubject" type="text" placeholder="Your subject"  ></input>
                                         <p id="subjecterror" className="error"></p>
                                         <textarea className="mb-3" id="formGroupMessage" name="usermessage" type="text" as="textarea" rows={3} placeholder="messege" ></textarea>
                                         <p id="messageerror" className="error"></p>
                                         <button type="submit" className="Contact-btn">SUBMIT</button>
                                    </form> */}

                                    <Form className="Contact-form" onSubmit={Validateform} name="productforms" >
                                        <Form.Group className="mb-3" controlId="formGroupName"   >
                                        
                                            <Form.Control type="text" placeholder="Your name"  name="username"/> 
                                         
                                            <p id="usererror" className="error"></p>
                     
                                        </Form.Group>   
                    
                                        <Form.Group className="mb-3" controlId="formGroupEmail"  >
                                            
                                            <Form.Control type="text" placeholder="your email" name="useremail" />
                              
                                            <p id="emailerror" className="error"></p>
                     
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formGroupSubject"   >
                                            
                                            <Form.Control type="text"  placeholder="subject" name="usersubject"/>
                                       
                                            <p id="subjecterror" className="error"></p>
                     
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formGroupMessage" >
                                            
                                        <Form.Control as="textarea" rows={3} placeholder="messege"  name="usermessage"/>
                              
                                        <p id="messageerror" className="error"></p>

                                        </Form.Group>
                                        <button type="submit" className="Contact-btn">SUBMIT</button>

                                    </Form>

                                      
                                </div>
                                 

                            </div>
                           
                           
                            <div className="col-lg-6 order-1 order-lg-2">
                                <div className="Contact-img">
                                     <img src={Contactimg}></img>
                                </div>
                            </div>
                            </div>





                            <div className='row'>
                                <div className='col-md-12'>
                                <Table striped bordered hover className="mt-5">  
                                    <thead>
                                        <tr>
                                        <th>id</th>
                                        <th>User Name</th>
                                        <th>Email </th>
                                        <th>Subject</th>
                                        <th>message</th>
                                           <th>Delete</th>
                                        <th>Edit</th> 
                                        {/* <th>updatedata</th>  */}
                                        </tr>
                                    </thead>
                                    <tbody>
                                       {products.map((item,index)=>(

                                        <tr key={index}>
                                        <td>{index+1}</td>
                                        <td>{item.username}</td>
                                        <td>{item.useremail}</td>
                                        <td>{item.usersubject}</td>
                                        <td>{item.usermessage}</td>
                                         <td><button onClick={()=>deletepeoduct(index)}>Delete</button></td>
                                        <td><button onClick={()=>Editproduct(index)}>Edit</button></td> 
                                        {/* <td><button onClick={()=>updatedata(index)}>updatedata</button></td> */}

                                        </tr>

                                       )
                                       
                                       )}
                                        
                                    </tbody>
                                    </Table> 
                                </div>
                            </div>
                        </div>




                        </section>
    
    
    </>
  )
}

export default Newform
