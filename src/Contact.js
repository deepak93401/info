import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import Contactimg from "./imaige/banner.jpg"
import Table from 'react-bootstrap/Table';

function Contact(){
//      const [name,setName]=useState("")
//    const [email,setEmail]=useState("")
//       const [password,setPassword]=useState("")
//        const [messege,setMessage]=useState("")
//     const [err,setErr]=useState(false)
   
//   function Validateform(e){
//             e.preventDefault()
//             let item=e.target.value;
//            if(item===""){
            
//             setErr(false)
//         }
//         else{
//                 setErr(true)
//             }
//         setName(console.log(item))
            
//      }

      const [products,setproduct]=useState([])
      

       function Validateform(e){
             e.preventDefault()
            
             
             let product={
                 username:document.getElementById('formGroupName').value,
                 useremail:document.getElementById('formGroupEmail').value,
                 usersubject:document.getElementById('formGroupSubject').value,
                 usermessage:document.getElementById('formGroupMessage').value
             }
             console.log(product)
          
             
           
             e.target.reset();
           
            let emailpattarn=/^([A-Za-z0-9])+@([A-Za-z0-9])+\.([A-Za-z]{2,4})$/;
            let flag=true;
        

            //  setdata(console.log(username.value))
           
            // username condition
            if(product.username==""){
                document.getElementById('usererror').innerHTML="please fill user name";
                flag=false
            }
           
            else if(product.username.length<10){
                document.getElementById('usererror').innerHTML="please fill user name os required  min 10 char";
                flag=false
            }
            else{
                document.getElementById('usererror').innerHTML="";
                setproduct([...products,product])
                flag=true
            }
            
            


            
        
            if(product.useremail==""){
                document.getElementById('emailerror').innerHTML="please fill user email";
                flag=false
            }
            else if(product.useremail.match(emailpattarn)){
                document.getElementById('emailerror').innerHTML="please fill Valid email";
                flag=false
            }

            else{
                document.getElementById('emailerror').innerHTML="";
                setproduct([...products,product])
                flag=true
            }
          
            
            if(product.usersubject==""){
                document.getElementById('subjecterror').innerHTML="please fill user subject";
                flag=false
            }
            else{
                document.getElementById('subjecterror').innerHTML="";
                setproduct([...products,product])
                 flag=true
            }

        
             
            if(product.usermessage==""){
                document.getElementById('messageerror').innerHTML="please fill user message";
               flag=false
            }
            else if(product.usermessage.length<=10){
                document.getElementById('messageerror').innerHTML="min 10 word";
                console.log(product.usermessage.value.length)
                flag=false
            }
            else{
                document.getElementById('messageerror').innerHTML="";
                setproduct([...products,product])
                flag=true
            }

              
            

       }
   
      

       
    return(
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

                                    <Form className="Contact-form" onSubmit={Validateform}>
                                        <Form.Group className="mb-3" controlId="formGroupName" >
                                        
                                            <Form.Control type="text" placeholder="Your name"/> 
                                            {/* {err?<span style={{color:"red"}}>user  invalid</span>:""} */}
                                            <p id="usererror" className="error"></p>
                     
                                        </Form.Group>   
                    
                                        <Form.Group className="mb-3" controlId="formGroupEmail"  >
                                            
                                            <Form.Control type="text" placeholder="your email"/>
                                            {/* {err?<span style={{color:"red"}}>user  invalid</span>:""} */}
                                            <p id="emailerror" className="error"></p>
                     
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formGroupSubject" >
                                            
                                            <Form.Control type="text"  placeholder="subject"/>
                                            {/* {err?<span style={{color:"red"}}>user  invalid</span>:""} */}
                                            <p id="subjecterror" className="error"></p>
                     
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formGroupMessage">
                                            
                                        <Form.Control as="textarea" rows={3} placeholder="messege" />
                                        {/* {err?<span style={{color:"red"}}>user  invalid</span>:""} */}
                                        <p id="messageerror" className="error"></p>

                                        </Form.Group>
                                        <button type="submit" className="Contact-btn">SUBMIT</button>

                                    </Form>

                           <Table striped bordered hover className="mt-5">  
                                    <thead>
                                        <tr>
                                        <th>id</th>
                                        <th>User Name</th>
                                        <th>Email </th>
                                        <th>Subject</th>
                                        <th>message</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                       {products.map((item,i)=>(

                                        <tr key={i}>
                                        <td>{i+1}</td>
                                        <td>{item.username}</td>
                                        <td>{item.useremail}</td>
                                        <td>{item.usersubject}</td>
                                        <td>{item.usermessage}</td>


                                        </tr>

                                       )
                                       
                                       )}
                                        
                                    </tbody>
                                    </Table> 

                                      
                                </div>
                                 

                            </div>
                           
                           
                            <div className="col-lg-6 order-1 order-lg-2">
                                <div className="Contact-img">
                                     <img src={Contactimg}></img>
                                </div>
                            </div>
                            
                        </div>
                    </div>
           </section>
        
           
        </>
    )
}
export default Contact;