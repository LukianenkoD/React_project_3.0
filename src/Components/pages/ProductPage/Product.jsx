import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Header from "../../header/Header";
import Footer from "../../footer/Footer";
import Map from "../../map/Map";
import { useDispatch, useSelector } from "react-redux";
import { addToCard } from "../../../action/cardAction";
import PageShoppingCart from "../CartPage/PageShoppingCart";
import AddToCart from "../../AddToCart";
import AddToCartProduct from "./AddToCartProduct";
import "../ProductPage/Product.scss";

// import {cartReducer} from '../../reducers/cartReducer'

function Product() {
  const { productId } = useParams();
  const [products, setProducts] = useState([]);

  // const prod = useSelector((state) => state.productRed.products);

  const dispatch = useDispatch();

  function handleAddToCart(id) {
    dispatch(addToCard(id));
  }

  // console.log(products);
  useEffect(() => {
    async function getProducts() {
      try {
        const response = await axios.get(`http://localhost:3333/products/all/`);
        setProducts(response.data);
      } catch (err) {
        console.log(err);
      }
    }
    getProducts();
  }, []);

  return (
    <>
      {/* <div>Product</div>
      {productId} */}
      <div className="container product">
        {products
          .filter((product) => product.id === +productId)
          .map((prod) => (
            <div className="container product" key={prod.id}>
                
                <h1>{prod.title}</h1>
        
              <div  className="product__div">
                <div>
                  <img
                    src={`http://localhost:3333${prod.image}`}
                    alt="img_product"
                  />
                </div>
                <div style={{ width: "60%" }}>
                  <div className="product__price">
                    <h4>{prod.discont_price}$</h4>
                    <h3 style={{ color: "grey" }}>{prod.price}$</h3>
                    <h2 style={{ color: "rgba(255, 50, 161, 1)" }}>
                      {Math.floor(
                        ((prod.price - prod.discont_price) / prod.price) * 100
                      )}
                      %
                    </h2>
                  </div>
                  {/* <p>{prod.title}</p> */}
                  {/* <button onClick={() => handleAddToCart(prod.id)}>To cart</button> */}
                  <div className="product__btn">
                    <AddToCartProduct prod={prod} />
                    <div>
                    <p>Description</p>
                    </div>
                    <div>
                      <p>{prod.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}

export default Product;
