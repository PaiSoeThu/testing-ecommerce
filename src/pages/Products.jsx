import React from 'react'
import {useStateContext} from '../context/StateContext'
import Card from '../compoents/Card';

const Products = () => {

    const {state:{productList}} = useStateContext();
    // console.log(productList);
    const {search} = useStateContext();

    const filterData = productList.filter(pd=>pd.title.toLowerCase().includes
    (search.toLowerCase()));

  return (
    <div className='container mx-auto flex flex-wrap gap-2'>
        {
            filterData?.map(product =>(   
            <Card key={product.id} product={product}/>
            )
            )
        }
    </div>
  )
}

export default Products