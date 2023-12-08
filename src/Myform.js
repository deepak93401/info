import React, { useState } from 'react'


function Myform() {
    let [array,setArray]=useState([])
    let [inputdata,setInputdata]=useState({name:"",number:""})
     function data(e)
   {
         setInputdata({...inputdata,[e.target.value]:e.target.value})  
   }
  
   let {name,number}=inputdata;
   function addinputdata(){
    if(name==="" && number===""){
      alert("enter name and roll umber")
    }
    else{

  
    setArray([...array,{name,number}])
    console.log(inputdata)
    setInputdata({name:"" ,number:""})
  }
   }
   console.log(array,"TOTAL ARRY")
  return (
    
    <>
       <h1>Hello world</h1>
       <input type='text ' value={inputdata.name||""} name='name' placeholder='Enter name' onChange={data}/>
       <input type='number'value={inputdata.number||""} name='number'  placeholder='Enter number' onChange={data}/>
       <button onClick={addinputdata}> Add data</button>


       <table border="1" width="100%">
          <tbody>
            <tr>
              <th>name</th>
              <th>number</th>
              <th>edit</th>
              <th>Delete</th>
            </tr>
            {
              array&& array.map((item,i)=>(
                <tr key={i}>
                   <td>{item.name}</td>
                   <td>{item.number}</td>
                   <td><button>update</button></td>
                   <td><button>Delete</button></td>
                </tr>
              ))
            }
          </tbody>
       </table>
    </>
  )
}

export default Myform;
