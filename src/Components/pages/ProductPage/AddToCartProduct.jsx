import React from 'react';
import { useDispatch} from "react-redux";
import { addNewItemAction } from '../../../reducers/CartListReducer';

function AddToCartProduct({prod}) {
 
    const dispatch = useDispatch();
  
    function handleAddToCart() {
      dispatch(addNewItemAction(prod));
     }
  return (
    <div>
        <button onClick={() => handleAddToCart(prod)} className='new_btn_add_to_cart img_responsive'>
            To cart
        </button>
    </div>
  )
}

export default AddToCartProduct