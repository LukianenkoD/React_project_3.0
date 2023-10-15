import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import "./PageShoppingCart.scss";
import plus from "../Img/plus.svg";
import minus from "../Img/minus.svg";
import right from '../Img/right.svg';
import { useNavigate } from "react-router-dom";
import { addToCard } from "../../../action/cardAction";
import { changeState, increaseItemByIdAction, remItemByIdAction } from "../../../reducers/CartListReducer";
// import { ChangeCard } from "../../../action/cardAction";
function PageShoppingCart() {
  

  const cartList = useSelector((store) => store.cartList);
  // const products = useSelector((store) => store.product.products);
  const dispatch = useDispatch();

  const navigate = useNavigate();



console.log(cartList);

  return (
    <>
      <div className="container">
        <h1>Shopping cart</h1>
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
            <div style={{ width: "824px" }} key={product.id}>
              <div
                style={{
                  height: "1px",
                  width: "824px",
                  background: "#A7A7A7",
                  marginTop: "40px",
                  marginBottom: "40px",
                }}
              ></div>
              <span
                onClick={() => dispatch(remItemByIdAction(product.id))}
                className={"close"}
              >
                X
              </span>
              <img
                style={{
                  width: "192px",
                  height: "166px",
                  borderRadius: "10px",
                }}
                src={`http://localhost:3333${product.image}`}
                alt="product"
              />
              <h2>{product.title}</h2>
    
              
              
    
              <div className="cart quantity_inner">
      <button  className="bt_minus">
      <img src={minus} alt="minus" />
    </button>
    <input
      type="number"
      min={1}
      max={100}
      value={cartList.length}
      className="quantity"
    />
     <button onClick={()=>dispatch(increaseItemByIdAction(product.price))} className="bt_plus">
      <img src={plus} alt="plus" />
    </button>

  </div>
  
            </div>
           
             
              ))}

          <div
            style={{
              height: "1px",
              width: "824px",
              background: "#A7A7A7",
              marginTop: "40px",
              marginBottom: "40px",
            }}
          ></div>
         
        </div>
        <div className="cart__order">
          <h3>Order details</h3>
          <div className="cart__order_div">
            <div>
              <p>Total</p>
            </div>
            <div>
            </div>
          </div>
          <div>
            {cartList.map(elem=>elem.total)}
            <input type="tel" placeholder="Phone number" />
          </div>

          <button>Order</button>
        </div>
      </div>
    </>
  );
}

export default PageShoppingCart;
