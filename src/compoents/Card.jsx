import React from 'react'
import { Link } from 'react-router-dom';

const Card = ({product}) => {

    const txt = product.title;
    const title = txt.substring(0,25);
    const des = product.description;
    const desc = des.substring(0,40);
  return (
   
<div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 w-[300px]">
   <img src={product.image} alt="" className='h-[100px] mb-5' />
    <a href="#">
        <h5 className="mb-2 text-xl font-semibold tracking-tight text-tertiary">{title}</h5>
    </a>
    <p className="mb-3 font-normal text-secondary">{desc}...</p>
   
    <a href="#" className="inline-flex items-center hover:underline bg-primary rounded py-1 px-2 me-2">
        Go To Cart
    </a>

    <Link to={`/detail/${product.id}`} >
    <a href="#" className="inline-flex items-center hover:underline bg-tertiary rounded py-1 px-2">
        Detail
    </a>
    </Link>

</div>

  )
}

export default Card