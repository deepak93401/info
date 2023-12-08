import React from "react";

function Formdisplay({Display})
{
      console.log("Edit")
    return(
        <>
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
                    {Display.map((row,index)=>(
                       <tr key={index}>
                           <td>{index+1}</td>
                           <td>{row.proname}</td>
                           <td>{row.proprice}</td>
                           <td>{row.prodes}</td>
                           {/* <td><a href="" onClick={Editproduct}>Edit</a></td> */}
                           {/* <td><a href="">Delete</a></td> */}
                           

                 </tr>
                    ))}
                       
                   </tbody>
                 
            </table>

        </>
    )
}
export default Formdisplay;