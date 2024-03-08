
import './App.css';
import { Route,Routes } from 'react-router-dom';
import Main from './Main';
import Login from './Login';
import Resiter from './Resiter';
import { Component } from 'react';
import Protected from './Protected';

import Header from './Header';

import Footer from "./Footer";
import Mainhome from './Mainhome';



function App() {
  return (
    <>
 
 <Header/>
    <Routes> 
       <Route path="*" element={<Protected Component={Main}/>}/>
       <Route path="/mainhome" element={<Mainhome/>}/>
       <Route path="/login" element={<Login/>}/>
       <Route path="/resiter" element={<Resiter/>}/>
       {/* <Route path="/" element={
        <>
             <Home/>
           <About/>
           <Service/>
           <Portfolio/>
           <Blog/>
           <Contact/>
          
        
        </>
       }/> */}
                
          
        </Routes>
          
        <Footer/>

       </>
  )
}

export default App;
