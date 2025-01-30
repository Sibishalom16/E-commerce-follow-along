import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import React from 'react'
import {Login,Signup} from './Routes/Routes';


function App(){
  return(
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<h1>Hello</h1>}></Route>      
      <Route path='/login' element={<Login/>}></Route>      
      <Route path='/signup' element={<Signup/>}></Route>      
    </Routes>
    </BrowserRouter>
  )
}
export default App;