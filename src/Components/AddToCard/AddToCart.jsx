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
    <div style={{height:'0'}}>
        <button onClick={() => handleAddToCart(prod)} className='new-img-responsive btn_add_to_cart img-responsive'>
            Add to cart
        </button>
    </div>
  )
}

export default AddToCart