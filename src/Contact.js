import React, { useEffect, useState } from "react";
import Form from 'react-bootstrap/Form';
import Contactimg from "./imaige/banner.jpg"
import Table from 'react-bootstrap/Table';
import {useCookies} from 'react-cookie';




function Contact(){
   
            // main formdata storage in array
            const [products,setproduct]=useState([])
           
           
            // local storage data in array
            const [localdata,setLocaldata]=useState([])
         
            // edit function replace index  
            const [editindex,setEditIndex]=useState()
            // const [isCookies,setCookies]=useState()
           
            // cookies data key
            const [cookies,setCookies]=useCookies(['user'])
        
            // cookies data stoare in array
            const [newproducts,setnewproduct]=useState([])
            

           
    
    //  form submittion function
       function Validateform(e){
             e.preventDefault()
             const [username,useremail,usersubject,usermessage]=e.target;
        

            
             let product={
               username:username.value,
               useremail:useremail.value,
               usersubject:usersubject.value,
                usermessage:usermessage.value

             }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
            
            
             console.log("product",product)
          
             
           
             e.target.reset();
           
            // email pattarn
            let emailpattarn=/^([A-Za-z0-9])+@([A-Za-z0-9])+\.([A-Za-z]{2,4})$/;
            
            let result=true;

           
            // username validation condition 
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
            
            


            
        //   usseremail validation condition
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
          
            
            // usersubject validation condition
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

        
            //  usermessage condition
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
            //  validation result condition
            if(result)
            {
                // main formdata 
                setproduct([...products,product])
                result=false;
               
                // localstarage function call
                savelocal(product)
               
                //  cookies data
                setnewproduct([...newproducts,product])
                setCookies("user",[...newproducts,product],{path:"/"})
               
             
            
            }

        
            
            
        }
        console.log("products",products)

        //  this not use in component

        //  localStorage.setItem("products",JSON.stringify(products))
        //  const getlocalstorage=localStorage.getItem("products")
        //  const parsedItem = JSON.parse(getlocalstorage);
      
        // useEffect(()=>{
         
        //     console.log("parsedItem",parsedItem)

        //         setLocaldata(parsedItem)
               
            
           
        // },[getlocalstorage])   



     //  local storage function

        function savelocal(product){
             let storedFromData=JSON.parse(localStorage.getItem('product'))||[];
             localStorage.setItem('product',JSON.stringify([...storedFromData,product]))
            
             storedFromData=JSON.parse(localStorage.getItem('product'))||[];
             setLocaldata(storedFromData)
        }


        //  cookies data store a variable  with useing use effect
        useEffect(()=>{
            const storecookiesdata=cookies.user ||[]
            setnewproduct(storecookiesdata)
         
         },[cookies.user])
        
        //  this is not use in this component

        //   useEffect(()=>{
        //      const forms=JSON.parse(localStorage.getItem("products"))
        //      if(products===""){
        //         setLocaldata([...products,...forms])
        //         console.log("forms",forms)
        //      }
        //   },[])
        
        //    useEffect(()=>{
        //        localStorage.setItem("products",JSON.stringify(products))
        //    },[products])

       

        //  delete formdata value
          const deletepeoduct=(index)=>{
             alert(index)
            
             products.splice(index,1)
          console.log([...products])
               setproduct([...products])
          }

         
    //    editform 
   
          const Editproduct=(index)=>
          {
            
              let productforms=document.forms["productforms"]
            productforms.username.value=products[index].username;
            productforms.useremail.value=products[index].useremail;
            productforms.usersubject.value=products[index].usersubject;
            productforms.usermessage.value=products[index].usermessage;
             setEditIndex(index)
         }

        //  update form

         const updatedata=(event)=>
         {
           let productforms=document.forms["productforms"]
              let product=
              {
                 username:productforms.username.value,
                 useremail:productforms.useremail.value,
                 usersubject:productforms.usersubject.value,
                 usermessage:productforms.usermessage.value,
              }
              products.splice(editindex,1,product)
              setproduct([...products])
             console.log(setproduct)
   
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

                                    <Form className="Contact-form" onSubmit={Validateform} name="productforms" >
                                        <Form.Group className="mb-3" controlId="formGroupName"   >
                                        
                                            <Form.Control type="text" placeholder="Your name" name="username" /> 
                                            {/* {err?<span style={{color:"red"}}>user  invalid</span>:""} */}
                                            <p id="usererror" className="error"></p>
                     
                                        </Form.Group>   
                    
                                        <Form.Group className="mb-3" controlId="formGroupEmail"  >
                                            
                                            <Form.Control type="text" placeholder="your email" name="useremail" />
                                            {/* {err?<span style={{color:"red"}}>user  invalid</span>:""} */}
                                            <p id="emailerror" className="error"></p>
                     
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formGroupSubject"   >
                                            
                                            <Form.Control type="text"  placeholder="subject" name="usersubject"/>
                                            {/* {err?<span style={{color:"red"}}>user  invalid</span>:""} */}
                                            <p id="subjecterror" className="error"></p>
                     
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formGroupMessage" >
                                            
                                        <Form.Control as="textarea" rows={3} placeholder="messege" name="usermessage" />
                                        {/* {err?<span style={{color:"red"}}>user  invalid</span>:""} */}
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

                        <div className="row">
                             <div className="col-md-12">
                              {/* main form data store in table  */}
                                 
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
                                        <th>updatedata</th>
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
                                        <td><button onClick={()=>updatedata(index)}>updatedata</button></td>

                                        </tr>

                                       )
                                       
                                       )}
                                        
                                    </tbody>
                                    </Table> 


                                
                                
                                
                                
                                
                               

                                     {/* localstorge data store in table  */}
                                 
                                    {/* <Table striped bordered hover className="mt-5">  
                                    <thead>
                                        <tr>
                                        <th>id</th>
                                        <th>User Name</th>
                                        <th>Email </th>
                                        <th>Subject</th>
                                        <th>message</th>
                                    <th>Delete</th>
                                        <th>Edit</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                       {localdata.map((item,index)=>(

                                      <tr key={index}>
                                     <td>{index+1}</td>
                                     <td>{item.username}</td>
                                    <td>{item.useremail}</td>
                                    <td>{item.usersubject}</td>
                                    <td>{item.usermessage}</td>  */}
                                        {/* <td><button onClick={()=>deletepeoduct(i)}>Delete</button></td>
                                        <td><button onClick={()=>Editproduct(i)}>Edit</button></td>  */}

                                        {/* </tr>

                                       )
                                       
                                       )} 
                                        
                                    </tbody>
                                    </Table>  */}


                                  {/* cookies data store in table */}
                                  <Table striped bordered hover className="mt-5">  
                                    <thead>
                                        <tr>
                                        <th>id</th>
                                        <th>User Name</th>
                                        <th>Email </th>
                                        <th>Subject</th>
                                        <th>message</th>
                                          {/* <th>Delete</th>
                                        <th>Edit</th> 
                                        <th>updatedata</th> */}
                                        </tr>
                                    </thead>
                                    <tbody>
                                       {newproducts.map((item,index)=>(

                                        <tr key={index}>
                                        <td>{index+1}</td>
                                        <td>{item.username}</td>
                                        <td>{item.useremail}</td>
                                        <td>{item.usersubject}</td>
                                        <td>{item.usermessage}</td>
                                         {/* <td><button onClick={()=>deletepeoduct(index)}>Delete</button></td> */}
                                        {/* <td><button onClick={()=>Editproduct(index)}>Edit</button></td>  */}
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
export default Contact;