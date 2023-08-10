import React, { useState } from 'react'
import { AiFillMinusSquare, AiFillPlusSquare, AiTwotoneDelete } from 'react-icons/ai'
import { useStateContext } from '../context/StateContext';

const CardItem = ({item,decreaePrice,increaePrice}) => {
    const {dispatch} = useStateContext();
    const [quentity,setQuentity] = useState(1);
    const decreaseQty = ()=>{
        if (quentity > 1) {
            setQuentity((quentity)=>quentity - 1);
            decreaePrice(item.price);
        }
    }

     const increaseQty = ()=>{
        setQuentity((quentity)=>quentity + 1);
        increaePrice(item.price);
    }

    const itemPrices = item.price * quentity;
    const itemPrice = itemPrices.toFixed(2);


  return (
    <div key={item.id} className='mb-5 flex gap-5'>
    <img src={item.image} alt="" className='w-20'/>
    <div>
    <h3>{item.title}</h3>
    <p>{itemPrice}</p>
    <div className='flex justify-around'>
    <AiFillMinusSquare onClick={decreaseQty}/>
    <p>{quentity}</p>
    <AiFillPlusSquare onClick={increaseQty} />
    </div>
    <button onClick={()=>dispatch({type:"REMOVE_FROM_CART",payload:item})} className='text-tertiary text-2xl'>
    <AiTwotoneDelete />
    </button>
    </div>
    </div>
  )
}

export default CardItem