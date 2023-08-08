import React from 'react'
import './index.css'
import Navbar from './compoents/Navbar'
import { Route, Routes } from 'react-router-dom'
import Products from './pages/Products'
import Detail from './pages/Detail'
import Cart from './pages/Cart'


const App = () => {
  return (
   
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Products />}/>
      <Route path='/detail/:id' element={<Detail />}/>
      <Route path='/cart' element={<Cart />}/>


    </Routes>
    </>
  )
}

export default App