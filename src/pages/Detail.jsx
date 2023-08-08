import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getData } from '../api';

const Detail = () => {
    const {id} = useParams();

    const [detail,setDetail] = useState({});
    const [cat,setCat] = useState([]);


    const getDetail = async()=>{
        const data =await  getData(`/products/${id}`);
        setDetail(data);
    }
    const getProductsByCat = async()=>{
        const product =await  getData(`/products/category/${detail.category}`);
        setCat(product);
        console.log(product);
    }

    const filter = cat.filter(c=>c.id !== detail.id);

    useEffect(()=>{
        getDetail();
    },[])

    useEffect(()=>{
        getProductsByCat();
    },[])
    // console.log(cat);
  return (
    <>
    <div className='container mx-auto flex gap-5 justify-start my-5'>
      <img src={detail.image} alt="" className='mb-5 w-72'/>
      <div className='w-100'>
      <p className='mb-3 font-semibold'>{detail.title}</p>
      <p className='text-secondary'>{detail.description}</p>
      <p className='text-secondary'>${detail.price}</p>
      <p className='text-secondary'>{detail.category}</p>
      </div>
    </div>
    <div className='container mx-auto'>
    <h1 className='mb-5'>Relatived Products</h1>
    <div className='flex gap-3'>
      {
          filter?.map(c=>   
            <img src={c?.image} alt="" className='mb-5 w-20'  key={c?.id}/>    
        )
    }
    </div>
    </div>
    
    </>
  )
}

export default Detail