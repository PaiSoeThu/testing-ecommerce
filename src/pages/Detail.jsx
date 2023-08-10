import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getData } from '../api';
import { useStateContext } from '../context/StateContext';

const Detail = () => {
    const {id} = useParams();
    const [detail,setDetail] = useState({});
    const [cat,setCat] = useState([]);
    const {dispatch} = useStateContext();


    const getDetail = async()=>{
        setDetail(await  getData(`/products/${id}`));
    }
    const getProductsByCat = async()=>{
      const data = await  getData(`/products/category/${detail.category}`);
      const filterData = data?.filter(item=>item.id !== detail.id)
        setCat(filterData);
    }

    // const filter = cat.filter(c=>c.id !== detail.id);

    useEffect(()=>{
        getDetail();
        getProductsByCat();
    },[detail,cat])

    // console.log(cat);
  return (
    <div>
    <div className='container mx-auto flex gap-5 justify-start my-5'>
      <img src={detail?.image} alt="" className='mb-5 w-72'/>
      <div className='w-100'>
      <p className='mb-3 font-semibold'>{detail?.title}</p>
      <p className='text-secondary'>{detail?.description}</p>
      <p className='text-secondary'>${detail?.price}</p>
      <p className='text-secondary'>{detail?.category}</p>
      <a href="#" onClick={()=>dispatch({type:"ADD_TO_CART",payload:detail})} className="inline-flex items-center hover:underline bg-white text-tertiary rounded py-1 px-2 my-2">
        Go To Cart
    </a>
    <Link to="/success" >
    <a href="#" onClick={()=>dispatch({type:"CART_EMPTY",payload:detail})} className="inline-flex items-center hover:underline bg-white text-tertiary rounded py-1 px-2 my-2 ms-3">
        Buy Now
    </a>
    </Link>
      </div>
    </div>
    <div className='container mx-auto'>
    <h1 className='mb-5'>Relatived Products</h1>
    <div className='flex gap-3'>
      {cat?.map(c=>
      (
      <div className='h-45' onClick={()=>setDetail(c)} key={c?.id}   > 
      <img src={c?.image} alt="" className='mb-5 w-20' />
      </div>
      ))}
    </div>
    </div>
    
    </div>
  )
}

export default Detail