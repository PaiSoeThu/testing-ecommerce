import React from 'react'
import './index.css'
import Navbar from './compoents/Navbar'
import { Route, Routes } from 'react-router-dom'
import Products from './pages/Products'
import Detail from './pages/Detail'
import Cart from './pages/Cart'
import Success from './pages/Success'


const App = () => {
  return (
   
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Products />}/>
      <Route path='/detail/:id' element={<Detail />}/>
      <Route path='/cart' element={<Cart />}/>
      <Route path='/success' element={<Success />}/>



    </Routes>
    </>
  )
}

export default App