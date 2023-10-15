import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { addToCard } from "../action/cardAction";
import { addNewItemAction } from '../reducers/CartListReducer';

function AddToCart({prod}) {
 
    const dispatch = useDispatch();
  
    function handleAddToCart() {
      dispatch(addNewItemAction(prod));
    }
  return (
    <div style={{height:'0'}}>
        <button onClick={() => handleAddToCart(prod)} className='btn_add_to_cart img-responsive'>
            Add to cart
        </button>
    </div>
  )
}

export default AddToCart