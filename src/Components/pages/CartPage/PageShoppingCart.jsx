import { useDispatch, useSelector } from "react-redux";
import "./PageShoppingCart.scss";
import plus from "../Img/plus.svg";
import minus from "../Img/minus.svg";
import right from '../Img/right.svg';
import { useNavigate } from "react-router-dom";
import { decreaseItemByIdAction, increaseItemByIdAction, remItemByIdAction } from "../../../reducers/CartListReducer";
import SendOrder from "../../SendOrder/SendOrder";

function PageShoppingCart() {
  const cartList = useSelector((store) => store.cartList);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const array = cartList.map((elem)=> (elem.quantity?elem.quantity:1)*
  (Math.floor(elem.discont_price)
  ?Math.floor(elem.discont_price):Math.floor(elem.price))); 

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
              <div className="cart__title">
              <div>
              <img className="cart__div_img"
                src={`http://localhost:3333${product.image}`}
                alt="product"
              />
              </div>
              <div className="cart__title_centr">
              <div className="cart__title_div">
              <h2 className="cart__title_h2">{product.title}</h2>
              </div>
              <div className="cart quantity_inner">
                <button onClick={()=>dispatch(decreaseItemByIdAction(product.id))}  className="bt_minus">
                  <img src={minus} alt="minus" />
                </button>
                  <input
                  type="number"
                  min={1}
                  max={100}
                  value={product.quantity?product.quantity:1}
                  onChange={(e)=>e.target.value}
                  className="quantity"/>
                <button onClick={()=>dispatch(increaseItemByIdAction(product.id))} className="bt_plus">
                  <img src={plus} alt="plus" />
                </button>
              </div>
              </div>
              <div className="action_prices" style={{}}>
                
                {product.discont_price?
                <>
                <div className="action">
                  <div className="action__price">
                    <div  className="action__price_div" >
                      <div>
                      <h4 className="price__dolar">{Math.floor(product.discont_price)}</h4>
                      </div>
                    <div>
                       <p className="price__p">$</p>
                      </div>
                      </div>
                    <div className="price">
                      <div>
                        <h3 className="action__price_h4">{Math.round(product.price)}$</h3>
                      </div>
                    </div>
                  </div>
                 </div>
                </>
               :
               <>
               <div className="price">
                <div>
                <h3 className="price__dolar">{Math.floor(product.price)}</h3>
                </div>
                <div>
                 <p className="price__p">$</p>
                </div>
               </div>
               </>}
              </div>
            </div>
            </div>))}
              <div className="line"></div>
         
        </div>
        <div className="cart__order">
          <h3>Order details</h3>
          <div className="cart__order_div">
            <div>
              <p>Total</p>
            </div>
            <div>
              <h4>{array.reduce((acc,curr)=>acc+curr,0)}</h4>
            </div>
          </div>
          <div>
            <SendOrder/>
          </div>
        </div>
      </div>
    </>
  );
}

export default PageShoppingCart;
