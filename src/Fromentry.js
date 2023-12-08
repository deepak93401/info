import React, { useState } from "react";
// import Formdisplay from "./Fromentry";

function Formentry()
{
      const [products,setproduct]=useState([]);
      const [productindex,setproductindex]=useState()
      
      const saveproduct=(event)=>
      {
             event.preventDefault();
             let [proname,proprice,prodes]=event.target;
             
             const product=
             {
                 proname:proname.value,
                 proprice:proprice.value,
                 prodes:prodes.value,
             }
            //  setproduct([...products,product])
             event.target.reset()
              
             if(product.proname==="" && product.proprice==="" && product.prodes==""){
                 alert("please fill form")
                 return true;
             } 
             else{
                setproduct([...products,product])
                return false;
               
              
             }
             
      }

     const removeproduct=(index)=>{
          
        products.splice(index,1)
        setproduct([...products])
     }

      
    //   const Editproduct=(index)=>
    //   {
    //     let myedit=document.forms["edit"]
    //      myedit.proname.value=products[index].proname;
    //      myedit.proprice.value=products[index].proprice;
    //      myedit.prodes.value=products[index].prodes;
    //      setedit(index)
    //      console.log(setedit)

    //  }
    

    //   const updatedata=(event)=>
    //   {
    //     let myedit=document.forms["edit"]
    //        let product=
    //        {
    //           proname:myedit.proname.value,
    //           proprice:myedit.proprice.value,
    //           prodes:myedit.prodes.value,
    //        }
    //        products.splice(edit,1,product)
    //        setproduct([...products])
    //       console.log(setproduct)

    //   }

    


      
    return(
        <>
         
         <form name="productforms" onSubmit={(event)=>saveproduct(event)}>
         {/* <form name="edit"> */}
            <input type="text" name="proname"></input>
            <input type="text" name="proprice"></input>
            <input type="text" name="prodes"></input>
            <input type="submit" value="save product" ></input>
            {/* <input type="button"  value="Updatedata" onClick={(event)=>updateproduct(event)}></input> */}

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
                           <td>{row.proprice}</td>
                           <td>{row.prodes}</td>
                           <td><button onClick={Editproduct}>Edit</button></td>
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