
import './App.css';
import { Route,Routes } from 'react-router-dom';
import Main from './Main';
import Login from './Login';
import Resiter from './Resiter';
import { Component } from 'react';
import Protected from './Protected';
import Home from './Home';
import Header from './Header';
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
       </Routes>
       </>
  )
}

export default App;
