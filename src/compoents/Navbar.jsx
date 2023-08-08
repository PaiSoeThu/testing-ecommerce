import React from 'react'
import {BsShop,BsCartDashFill} from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { useStateContext } from '../context/StateContext'

const Navbar = () => {
  const {search,setSearch} = useStateContext();
  return (
    <div className='mx-auto my-5 flex justify-between align-middle container'>
        <Link to="/">
    <div className='flex align-middle cursor-pointer'>
    <BsShop className='text-5xl me-3 text-tertiary'/><small className='self-center text-2xl'>Context Shop</small>
    </div>
        </Link>

    <div className='flex'>
    <Link to='/cart' >
    <div className='flex me-3 self-center text-2xl'>
      <BsCartDashFill  />
      <small className='bg-tertiary px-2 rounded'>10</small>
    </div>
      </Link>
    <div className='flex'>
      <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)} name="" id="" className='outline-none rounded bg-slate-600 me-3 px-3' />
      <button type="button" className='text-xl'>Search</button>
    </div>
    </div>
  </div>
  )
}

export default Navbar