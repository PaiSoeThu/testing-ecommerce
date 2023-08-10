import React, { useEffect,useState } from 'react'
import { useStateContext } from '../context/StateContext'
import { useNavigate } from 'react-router-dom';
import CardItem from '../compoents/CardItem';

const Cart = () => {
    const {state:{cart},dispatch} = useStateContext();
    const [total,setTotal] = useState(0);
    const nav = useNavigate();
    const clickHandler = ()=>{
      dispatch({type:"CART_EMPTY",payload:cart})
      nav("/success");
    }

    const decreaePrice = (price)=>{
      setTotal(total - price);
    }
    const increaePrice = (price)=>{
      setTotal(total + price);
    }
    useEffect(()=>{
      setTotal(cart?.reduce((c,v)=>c+v.price,0))
    },[cart])
  return (
    <div className='container mx-auto my-5'>
      <div className="grid grid-cols-4 gap-4">

      <div className="col-span-3">

        {cart?.map(item=>( 
        <CardItem key={item.id} item={item} increaePrice={increaePrice} decreaePrice={decreaePrice}/>
        ))}
      </div>
      <div className="col-span-1">
        <h1>Total Amount</h1>
          <p>{total.toFixed(2)}</p>
        <button onClick={()=>clickHandler()} className='bg-tertiary p-2 rounded my-5'>Checkout</button>

        <button onClick={()=>dispatch({type:"CART_EMPTY",payload:cart})} className='bg-tertiary p-2 rounded my-5'>Cart Empty</button>
      </div>
      </div>
    </div>
  )
}

export default Cart