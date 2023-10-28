import React from 'react';
import { useDispatch} from "react-redux";
import { addNewItemAction } from '../../reducers/CartListReducer';
import './AddToCard.scss'

function AddToCart({prod}) {
 
    const dispatch = useDispatch();
  
    function handleAddToCart() {
      dispatch(addNewItemAction(prod));
     }
  return (
    <div className='btn'>
        <button onClick={() => handleAddToCart(prod)} className='new-img-responsive btn__add'>
            Add to cart
        </button>
    </div>
  )
}

export default AddToCart