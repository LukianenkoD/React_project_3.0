import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import AddToCartProduct from "./AddToCartProduct";
import "../ProductPage/Product.scss";

function Product() {
  const { productId } = useParams();

  const products = useSelector((store) => store.product.newProduct);

  return (
    <>
      <div className="container product">
        {products
          .filter((product) => product.id === +productId)
          .map((prod) => (
            <div className="product" key={prod.id}>
              <div  className="product__div">
                <div className="product__div_left">
                  <div className="product__title">{prod.title}</div>
                  <img
                    src={`http://localhost:3333${prod.image}`}
                    alt="img_product"
                  />
                </div>
                <div className="product__div_right">
                  <div className="product__price">
                    {prod.discont_price ?
                    <>
                   <h4>{Math.floor(prod.discont_price)}$</h4>
                   <h3>{Math.round(prod.price)}$</h3>
                   <h2>{Math.floor(((prod.price - prod.discont_price) / prod.price) * 100)}%</h2>
                   </>
                    :
                    <h4>{Math.floor(prod.price)}$</h4>
                    }
                
                  </div>
                  <div className="product__btn">
                    <AddToCartProduct prod={prod} />
                    <span className="product__btn_line"></span>
                    <div>
                    <p className="product__btn_description">Description</p>
                    </div>
                    <div>
                      <p className="product__btn_text">{prod.description}</p>
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
