import React from 'react'
import {useStateContext} from '../context/StateContext'
import Card from '../compoents/Card';

const Products = () => {
    const {state:{product}} = useStateContext();
  return (
    <div className='container mx-auto flex flex-wrap gap-2'>
        {
            product?.map(product =>(   
            <Card key={product.id} product={product}/>
            )
            )
        }
    </div>
  )
}

export default Products