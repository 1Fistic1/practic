import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css'

import MainPage from './pages/mainPage/MainPage'
import Login from './comp/login/Login'
import Register from './comp/register/Register'
import VebinarPage from './pages/vebinarPage/VebinarPage';


function App() {

  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/vebinar' element={<VebinarPage />} /> 
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
