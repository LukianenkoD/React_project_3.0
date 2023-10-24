import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import "./PageShoppingCart.scss";
import plus from "../Img/plus.svg";
import minus from "../Img/minus.svg";
import right from '../Img/right.svg';
import { useNavigate } from "react-router-dom";
import { addToCard } from "../../../action/cardAction";
import { changeState, decreaseItemByIdAction, increaseItemByIdAction, remItemByIdAction } from "../../../reducers/CartListReducer";
// import { ChangeCard } from "../../../action/cardAction";
function PageShoppingCart() {
  

  const cartList = useSelector((store) => store.cartList);
  // const products = useSelector((store) => store.product.products);
  const dispatch = useDispatch();

  const navigate = useNavigate();
const array = cartList.map((elem)=> (elem.quantity?elem.quantity:1)*
(Math.floor(elem.discont_price)?Math.floor(elem.discont_price):Math.round(elem.price))); 
console.log(array);
// const arrayTotal = array.reduce((acc,curr)=>acc+curr);
// console.log(arrayTotal);

console.log(cartList);
// useEffect(() => {
//  localStorage.setItem("cart_item", JSON.stringify(cartList))
// }, [cartList])

  return (
    <>
      <div className="container">
        <h1 className="shopping_cart_h1">Shopping cart</h1>
      </div>
      <div className="back">
      <button className="back__btn" onClick={() => navigate("/PageAllCategories")}>
        Back to the store
      </button>
      <img className="back__btn_img" src={right} alt="right" />
      </div>
      
      <div className="container cart">
        <div>
          {cartList.map((product) => (
            <div className="cart__div"  key={product.id}>
              <div className="line"></div>
              <span
                onClick={() => dispatch(remItemByIdAction(product.id))}
                className={"close"} >
                X
              </span>
              <img className="cart__div_img"
                src={`http://localhost:3333${product.image}`}
                alt="product"
              />
              <h2>{product.title}</h2>
              <div>
                
                {product.discont_price?
                <>
                 <h4>{Math.floor(product.discont_price)}$</h4>
                <h3>{Math.round(product.price)}$</h3>
                </>
               :
                <h3>{Math.round(product.price)}$</h3>
                }
              </div>
                
              
              
        
              <div className="cart quantity_inner">
                <button onClick={()=>dispatch(decreaseItemByIdAction(product.id/*Math.floor(product.discont_price)?Math.floor(product.discont_price):Math.round(product.price)*/))}  className="bt_minus">
                  <img src={minus} alt="minus" />
                </button>
                  <input
                  type="number"
                  min={1}
                  max={100}
                  value={product.quantity?product.quantity:1/*cartList.map(elem=>elem.quantity)>1?cartList.map(elem=>elem.quantity):1}
                  onChange={(e)=>e.target.value*/}
                  onChange={(e)=>e.target.value}
                  className="quantity"/>
                <button onClick={()=>dispatch(increaseItemByIdAction(product.id/*Math.floor(product.discont_price)?Math.floor(product.discont_price):Math.round(product.price)*/))} className="bt_plus">
                  <img src={plus} alt="plus" />
                </button>
              </div>
            </div>
              ))}
              <div className="line"></div>
         
        </div>
        <div className="cart__order">
          <h3>Order details</h3>
          <div className="cart__order_div">
            <div>
              <p>Total</p>
            </div>
            <div>
              {/* <h4>{`${cartList.map(elem=>elem.quantity)>1?cartList.map((elem)=> elem.quantity*elem.price):cartList.map(elem=>elem.price)}$`}</h4> */}
              {/* <h4>{cartList.map(elem=>elem.total)}</h4> */}
              <h4>{array.reduce((acc,curr)=>acc+curr,0)}</h4>
            </div>
          </div>
          <div>
            
            <input type="tel" placeholder="Phone number" />
          </div>

          <button>Order</button>
        </div>
      </div>
    </>
  );
}

export default PageShoppingCart;
