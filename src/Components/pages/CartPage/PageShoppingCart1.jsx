import React, {useEffect, useState} from "react";
import Header from "../../header/Header";
import Footer from "../../footer/Footer";
import Map from "../../map/Map";
import { useDispatch, useSelector } from "react-redux";
import { deleteFromCard } from "../../../action/cardAction";
import "./PageShoppingCart.scss";
import plus from "../Img/plus.svg";
import minus from "../Img/minus.svg";
import right from '../Img/right.svg';
import { useNavigate } from "react-router-dom";
import { addToCard } from "../../../action/cardAction";
// import { ChangeCard } from "../../../action/cardAction";
function PageShoppingCart() {
  

  const cartList = useSelector((state) => state.productRed.cartList);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const [cart, setCart] = useState(cartList);
  
  const [total, setTotal] = useState({
 
    quantity:cart.reduce((acc,curr)=>{
      return acc + curr.quantity 
    },0),
    priceTotal:cart.reduce((acc,curr)=>{
      return acc + curr.priceTotal
    },0),
  })
  // console.log(cart);
  // console.log(total);
  function handleDeleteFromCart(id) {
    dispatch(deleteFromCard(id));
  }

  function handleAddToCart(id) {
    dispatch(addToCard(id));
  }

  

const deletProduct = (id)=>{
  setCart((cart)=>cart.filter((product)=>id !== product.id)
);
}

 const increase =(id)=>{
  setCart((cart)=>{
    return cart.map((product)=>{
      if(product.id === id){
        return {
          ...product,
          quantity: ++product.quantity,
          priceTotal: product.quantity*product.price
        }
      }
      return product
    })
  })
 }

 const decrease =(id)=>{
  setCart((cart)=>{
    return cart.map((product)=>{
      if(product.id === id){
        return {
          ...product,
          quantity: product.quantity - 1 > 1 ? --product.quantity: 1,
          priceTotal: (product.quantity - 1 > 1 ? --product.quantity : 1) * product.price
        }
      }
      return product
    })
  })
 }
const changeValue = (id,value) =>{
  setCart((cart)=>{
    return cart.map((product)=>{
      if(product.id === id){
        return{
          ...product,
          quantity: value,
          priceTotal: value*product.price
        }
      }
      return product
    })

  })
}


useEffect(()=>{
  setTotal({
    priceTotal:cart.reduce((acc,curr)=>{
      return acc + curr.price*curr.quantity
    },0),

  })

},[cart]);
console.log(cart);


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
          {cart.map((product) => (
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
                onClick={()=> deletProduct(product.id) || handleDeleteFromCart(product.id)}
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
              <p>{product.priceTotal}</p>
              
              
              <p>{product.quantity}</p>
              <div className="quantity_inner">
                <button onClick={()=>{decrease(product.id)}}  className="bt_minus">
      <img src={minus} alt="minus" />
    </button>
    <input
    onChange={(e)=>{changeValue(product.id, +e.target.value)}}
      type="number"
      min={1}
      max={100}
      value={product.quantity}
      className="quantity"
    />
    <button class="bt_plus" onClick={() => increase(product.id) || handleAddToCart(product.id)}>
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
              <h4>{`${total.priceTotal}$`}</h4>
            </div>
          </div>
          <div>
            {" "}
            <input type="tel" placeholder="Phone number" />
          </div>

          <button>Order</button>
        </div>
      </div>
    </>
  );
}

export default PageShoppingCart;
