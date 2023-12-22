import React, { useState } from "react";
// import Formdisplay from "./Fromentry";


function Formentry()
{
      const [products,setproduct]=useState([]);
      const [localdata,setLocaldata]=useState([])
      const [productindex,setproductindex]=useState()
     
      const saveproduct=(event)=>
      {
             event.preventDefault();
             let [proname,proemail,prodes]=event.target;
             
             const product=
             {
                 proname:proname.value,
                 proemail:proemail.value,
                 prodes:prodes.value,
             }
            //  setproduct([...products,product])
             event.target.reset()
             console.log(product)
             let emailpattarn=/^([A-Za-z0-9])+@([A-Za-z0-9])+\.([A-Za-z]{2,4})$/;
            
             let result=true;

             
 
              
            //  if(product.proname==="" && product.proprice==="" && product.prodes==""){
            //      alert("please fill form")
            //      return true;
            //  } 
            //  else{
            //     setproduct([...products,product])
            //     return false;
               
              
            //  }
   

            if(product.proname==""  ){
                document.getElementById('usererror').innerHTML="please fill user name";
              
                 result=false
              
            }
       
            
           
            else if(product.proname.length<=8 ){
                document.getElementById('usererror').innerHTML="please fill user name os required  min 8 char";
                result=false
               
            }
            else {
                document.getElementById('usererror').innerHTML="";
                
            }


            if(product.proemail==""){
                document.getElementById('emailerror').innerHTML="please fill user email";
              
                result=false
                 
            }
       
            else if( !product.proemail.match(emailpattarn) ){
                document.getElementById('emailerror').innerHTML="please fill Valid email";
                 result=false
                 
            }

            else{
                document.getElementById('emailerror').innerHTML="";
                
            }


            if(product.prodes=="" ){
                document.getElementById('subjecterror').innerHTML="please fill user subject";
               
                result=false
              
            }
      
            else if(product.prodes.length<=3 ){
                document.getElementById('subjecterror').innerHTML="please min 4 word";
              
                result=false
             
            }
            else{
                document.getElementById('subjecterror').innerHTML="";
             
                               
            }

            if(result)
            {
                setproduct([...products,product])
                result=false;
                savelocal(product)
            
            }



             
      }

      function savelocal(product){
        let storedFromData=JSON.parse(localStorage.getItem('product'))||[];
        localStorage.setItem('product',JSON.stringify([...storedFromData,product]))
       
        storedFromData=JSON.parse(localStorage.getItem('product'))||[];
        setLocaldata(storedFromData)
   }
   


     const removeproduct=(index)=>{
          
        products.splice(index,1)
        setproduct([...products])
     }

      
      const Editproduct=(index)=>
      {
        let productforms=document.forms["productforms"]
        productforms.proname.value=products[index].proname;
        productforms.proemail.value=products[index].proemail;
        productforms.prodes.value=products[index].prodes;
         setproductindex(index)

     }
    

    //   const updatedata=(event)=>
    //   {
    //     let productforms=document.forms["productforms"]
    //        let product=
    //        {
    //           proname:productforms.proname.value,
    //           proemail:productforms.proemail.value,
    //           prodes:productforms.prodes.value,
    //        }
    //        products.splice(productindex,1,product)
    //        setproduct([...products])
    //       console.log(setproduct)

    //   }

    


      
    return(
        <>
         
         <form name="productforms" onSubmit={(event)=>saveproduct(event)}>
         {/* <form name="edit"> */}
            <input type="text" name="proname"></input>
            <p id="usererror" className="error"></p>
                     
            <input type="email" name="proemail"></input>
            <p id="emailerror" className="error"></p>
                     
            <input type="text" name="prodes"></input>
            <p id="subjecterror" className="error"></p>
           

            <input type="submit" value="save product" ></input>
          
           
            {/* <input type="button"  value="Updatedata" onClick={(event)=>updatedata(event)}></input> */}

         </form>

         <table border="1" cellPadding="0" cellSpacing='5'>
                   <thead>
                    <tr>
                        <th>S.no</th>
                        <th>Product Name</th>
                        <th>Product price</th>
                        <th>Product description</th>
                        <th>Edit</th>
                        <th>delete</th>
                    </tr>
                   </thead>
                   <tbody>
                    {products.map((row,index)=>(
                       <tr key={index}>
                           <td>{index+1}</td>
                           <td>{row.proname}</td>
                           <td>{row.proemail}</td>
                           <td>{row.prodes}</td>
                           <td><button onClick={()=>Editproduct(index)}>Edit</button></td>
                           <td><button onClick={removeproduct}>Delete</button></td>
                           

                 </tr>
                    ))}
                       
                   </tbody>
                 
            </table>


            <table border="1" cellPadding="0" cellSpacing='5'>
                   <thead>
                    <tr>
                        <th>S.no</th>
                        <th>Product Name</th>
                        <th>Product price</th>
                        <th>Product description</th>
                        <th>Edit</th>
                        <th>delete</th>
                    </tr>
                   </thead>
                   <tbody>
                    {localdata.map((row,index)=>(
                       <tr key={index}>
                           <td>{index+1}</td>
                           <td>{row.proname}</td>
                           <td>{row.proemail}</td>
                           <td>{row.prodes}</td>
                           <td><button onClick={()=>Editproduct(index)}>Edit</button></td>
                           <td><button onClick={removeproduct}>Delete</button></td>
                           

                 </tr>
                    ))}
                       
                   </tbody>
                 
            </table>



             

            {/* <Formdisplay Display={products} ></Formdisplay> */}

        </>
    )
}
export default Formentry;